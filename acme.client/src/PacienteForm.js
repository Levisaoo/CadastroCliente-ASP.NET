import React, { useState } from 'react';

const PacienteForm = ({ onSave, existingPaciente = null }) => {
    const [nome, setNome] = useState(existingPaciente?.nome || '');
    const [dataNascimento, setDataNascimento] = useState(existingPaciente?.dataNascimento || '');
    const [cpf, setCpf] = useState(existingPaciente?.cpf || '');
    const [sexo, setSexo] = useState(existingPaciente?.sexo || '');
    const [endereco, setEndereco] = useState(existingPaciente?.endereco || '');
    const [status, setStatus] = useState(existingPaciente?.status || 'Ativo');

    const handleSubmit = (e) => {
        e.preventDefault();
        const paciente = {
            nome,
            dataNascimento,
            cpf,
            sexo,
            endereco,
            status,
        };
        onSave(paciente);
        // Limpar os campos do formulário
        setNome('');
        setDataNascimento('');
        setCpf('');
        setSexo('');
        setEndereco('');
        setStatus('Ativo');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
            </label>
            <label>
                Data de Nascimento:
                <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
            </label>
            <label>
                CPF:
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
            </label>
            <label>
                Sexo:
                <select value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                    <option value="">Selecione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
            </label>
            <label>
                Endereço:
                <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
            </label>
            <label>
                Status:
                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default PacienteForm;