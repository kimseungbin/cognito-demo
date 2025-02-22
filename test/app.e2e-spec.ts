import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import request from 'supertest'
import { AppModule } from '../src/app/app.module'
import { App } from 'supertest/types'
import 'reflect-metadata'

describe('AppController (e2e)', () => {
	let app: INestApplication<App>

	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile()

		app = moduleFixture.createNestApplication()
		await app.init()
	})

	afterAll(async () => {
		await app.close()
	})

	it('/ (GET)', () => {
		return request(app.getHttpServer()).get('/').expect(200).expect('Hello World!')
	})
})
