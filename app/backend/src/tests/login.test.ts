import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import User from '../database/models/User';
import { findUser } from './mocks/loginMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste rota login ', () => {
  describe('Verificar se e possivel logar', async () => {
    beforeEach(async () => {
      sinon.stub(User, 'findOne').resolves(findUser as User);

      const resposta = await chai.request(app).post('/login').send({
        email: 'user@user.com',
        password: 'secret_user'
      });
    })

    afterEach(() => {
      sinon.restore();
    });
    it('Verifica se retorna um status 400 quando email nao informado', async () => {
      const res  = await chai.request(app).post('/login').send({ password: 'invalid'})

      expect(res.status).to.be.eq(400)
      expect(res.body).to.deep.equal({ message:  'All fields must be filled'})
    });
    it('Verifica se retorna um status 400 quando senha nao informado', async () => {
      const res  = await chai.request(app).post('/login').send({ email: 'invalid@invalid.com'})
      expect(res.status).to.be.eq(400)
      expect(res.body).to.deep.equal({ message:  'All fields must be filled'})  
    });
  })
 
  
});
