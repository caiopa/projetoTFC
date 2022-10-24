import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('rota Login ', () => {
  beforeEach(()=>{
    (Example.findOne as sinon.SinonStub).restore();
  })

  it('login POST, verificar se retorna um token caso sucesso', () => {
    expect(false).to.be.eq(true);
  });
});
