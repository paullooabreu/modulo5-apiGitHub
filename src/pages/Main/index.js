import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositorios
     </h1>

      <Form onSubmit={() => { }}>
        <input
          type='text'
          placeholder='Adicionar repositorio'
        />

        <SubmitButton disable>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
