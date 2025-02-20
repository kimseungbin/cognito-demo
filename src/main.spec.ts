import type { Mock } from 'vitest'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { NestFactory } from '@nestjs/core'

vi.mock('@nestjs/core', () => ({
	NestFactory: { create: vi.fn() },
}))

describe('bootstrap', () => {
	let listenMock: ReturnType<typeof vi.fn>

	beforeEach(() => {
		// Reset modules to force a fresh import of main.ts
		vi.resetModules()
		;(NestFactory.create as unknown as Mock).mockClear()

		// Set up a fake app with a mocked listen method.
		listenMock = vi.fn().mockResolvedValue(undefined)
		;(NestFactory.create as unknown as Mock).mockResolvedValue({ listen: listenMock })
	})

	it('should call NestFactory.create with AppModule and call listen with process.env.PORT if set', async () => {
		process.env.PORT = '4000'
		// Importing main.ts triggers bootstrap()
		await import('./main')

		const callArg = (NestFactory.create as unknown as Mock).mock.calls[0][0]
		expect(callArg.name).toBe('AppModule')
		expect(listenMock).toHaveBeenCalledWith('4000')
	})

	it('should default to port 3000 if process.env.PORT is not set', async () => {
		// Ensure PORT is not set
		delete process.env.PORT
		await import('./main')
		expect(listenMock).toHaveBeenCalledWith(3000)
	})
})
