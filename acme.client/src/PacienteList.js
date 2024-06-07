import React from 'react';

const PacienteList = ({ pacientes, onEdit, onInativar }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data de Nascimento</th>
                    <th>CPF</th>
                    <th>Sexo</th>
                    <th>Endereço</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {pacientes.map((paciente) => (
                    <tr key={paciente.cpf}>
                        <td>{paciente.nome}</td>
                        <td>{paciente.dataNascimento}</td>
                        <td>{paciente.cpf}</td>
                        <td>{paciente.sexo}</td>
                        <td>{paciente.endereco}</td>
                        <td>{paciente.status}</td>