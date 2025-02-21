import { Test, TestingModule } from '@nestjs/testing'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'

describe('AppModule', () => {
	let module: TestingModule

	beforeAll(async () => {
		module = await Test.createTestingModule({
			imports: [AppModule],
		}).compile()
	})

	it('should have ConfigService defined.', () => {
		const configService = module.get<ConfigService>(ConfigService)
		expect(configService).toBeDefined()
	})
})
