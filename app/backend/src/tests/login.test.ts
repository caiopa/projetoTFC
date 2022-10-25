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
    async () => {
      sinon.stub(User, 'findOne').resolves(findUser as User);

      const resposta = await chai.request(app).post('/login').send({
        email: 'user@user.com',
        password: 'secret_user'
      });
    }
    beforeEach(() => {
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

    it('Verifica se retora erro 401 quando o password for incorreto', async () => {
      const res = await chai.request(app).post('/login').send({ email: 'user@user.com', password: 'invalid'})

      expect(res.status).to.be.eq(401)
      expect(res.body).to.deep.equal({ message: 'Incorrect email or password'})
    });
    it('Verifica se retora erro 401 quando o email for incorreto', async () => {
      const res = await chai.request(app).post('/login').send({ email: 'invalid@user.com',  password: 'secret_user'})
      expect(res.status).to.be.eq(401)
      expect(res.body).to.deep.equal({ message: 'Incorrect email or password'})
})
  })
 
  
});
