<script setup>
import { ref, onMounted } from "vue";
import { usePatientStore } from "../../stores/patient";
import AppButton from "../App/AppButton.vue";
import InputText from "../App/Input/InputText.vue";
import InputSelect from "../App/Input/InputSelect.vue";
import InputRadio from "../App/Input/InputRadio.vue";
import HogrefeFlag from "../App/HogrefeFlag.vue";

const patientStore = usePatientStore();

const showModal = ref(false);
const formRef = ref(null);

const toggleModal = () => {
    showModal.value = !showModal.value;
};

const patientData = ref({
    nome: "",
    email: "",
    cpf: "",
    endereco: "",
    dataNascimento: "",

    escolaridade: "",
    etnia: "",
    estado: "",
    cidade: "",
    estadoCivil: "",
    religiao: "",
    praticaReligiao: "",

    possuiDiagnosticoPsiquiatrico: "",
    qualDiagnostico: "",
    tipoProfissionalDignostico: "",
    tomaMedicamentoPsiquiatrico: "",
    qualMedicamento: "",
    jaFezAcompanhamentoPsiquiatrico: "",
    atualmenteFazAcompanhamentoPsiquiatrico: "",
    jaFezAcompanhamentoPsicologico: "",
    atualmenteFazAcompanhamentoPsicologico: "",
});

async function createPatient() {
    //const formPatient = new FormData(formRef.value);
    //const valuesFormPatient = Object.fromEntries(formPatient.entries());

    await patientStore.createPatient(patientData.value);
}
</script>

<template>
    <section class="patient-register">
        <div class="patient-register-wrapper">
            <h1 class="patient-register-title">Cadastrar paciente</h1>
            {{ patientData }}
            <form ref="formRef" @submit.prevent="createPatient()">
                <div class="patient-register-section">
                    <HogrefeFlag></HogrefeFlag>
                    <h4>Cadastro</h4>
                    <div class="patient-register-section-grid">
                        <InputText
                            name="nome"
                            label="Nome"
                            placeholder="Digite o nome do paciente"
                            v-model:model-value="patientData.nome"
                            required
                        ></InputText>
                        <InputText
                            name="email"
                            label="Email"
                            placeholder="Digite o email do paciente"
                            v-model:model-value="patientData.email"
                            required
                        ></InputText>
                        <InputText
                            name="cpf"
                            label="CPF"
                            placeholder="Digite o CPF do paciente"
                            v-model:model-value="patientData.cpf"
                            required
                        ></InputText>
                        <InputText
                            name="endereco"
                            label="Endereço"
                            placeholder="Digite o endereço do paciente"
                            v-model:model-value="patientData.endereco"
                            required
                        ></InputText>
                        <InputText
                            name="dataNascimento"
                            label="Data de nascimento"
                            placeholder="Digite o data de nascimento do paciente"
                            v-model:model-value="patientData.dataNascimento"
                            required
                        ></InputText>
                    </div>
                </div>

                <div class="patient-register-section">
                    <HogrefeFlag></HogrefeFlag>
                    <h4>Identificação</h4>
                    <div class="patient-register-section-grid">
                        <InputSelect
                            id="escolaridade"
                            label="Escolaridade"
                            :options="['Ensino fundamental', 'Ensino médio', 'Ensino superior']"
                            v-model:model-value="patientData.escolaridade"
                            required
                        ></InputSelect>
                        <InputSelect
                            id="etnia"
                            label="Etnia"
                            :options="['Branco']"
                            v-model:model-value="patientData.etnia"
                            required
                        ></InputSelect>
                        <InputSelect
                            id="estado"
                            label="Estado"
                            :options="['Ceará']"
                            v-model:model-value="patientData.estado"
                            required
                        ></InputSelect>
                        <InputSelect
                            id="cidade"
                            label="Cidade"
                            :options="['Fortaleza']"
                            v-model:model-value="patientData.cidade"
                            required
                        ></InputSelect>
                        <InputSelect
                            id="estadoCivil"
                            label="Estado civil"
                            :options="['Solteiro', 'Casado', 'Divorciado', 'Viúvo']"
                            v-model:model-value="patientData.estadoCivil"
                            required
                        ></InputSelect>
                        <InputSelect
                            id="religiao"
                            label="Religião"
                            :options="['Católico', 'Evangélico', 'Espírita', 'Ateu']"
                            v-model:model-value="patientData.religiao"
                            required
                        ></InputSelect>
                        <InputSelect
                            id="praticaReligiao"
                            label="Você pratica?"
                            :options="['Sim', 'Não']"
                            v-model:model-value="patientData.praticaReligiao"
                            required
                        ></InputSelect>
                    </div>
                </div>

                <div class="patient-register-section">
                    <HogrefeFlag></HogrefeFlag>
                    <h4>Cadastro</h4>
                    <div class="patient-register-section-column">
                        <InputRadio
                            name="possuiDiagnosticoPsiquiatrico"
                            label="Você possui algum diagnóstico psiquiátrico?"
                            :options="['Sim', 'Não']"
                            v-model:model-value="patientData.possuiDiagnosticoPsiquiatrico"
                            required
                        ></InputRadio>
                        <InputText
                            name="qualDiagnostico"
                            label="Se sim, qual e quando foi diagnosticado?"
                            placeholder="Digite o diagnóstico"
                            v-model:model-value="patientData.qualDiagnostico"
                            required
                        ></InputText>
                        <InputRadio
                            name="tipoProfissionalDignostico"
                            label="Qual profissional deu o diagnóstico? (psicólogo, psiquiatra, outros médicos?)"
                            :options="['Psicólogo', 'Psiquiatra', 'Outros médicos']"
                            v-model:model-value="patientData.tipoProfissionalDignostico"
                            required
                        ></InputRadio>
                        <InputRadio
                            name="tomaMedicamentoPsiquiatrico"
                            label="Você toma alguma medicamento psiquiátrico?"
                            :options="['Sim', 'Não']"
                            v-model:model-value="patientData.tomaMedicamentoPsiquiatrico"
                            required
                        ></InputRadio>
                        <InputText
                            name="qualMedicamento"
                            label="Se sim, qual e por quê?"
                            placeholder="Digite o medicamento"
                            v-model:model-value="patientData.qualMedicamento"
                            required>
                        </InputText>
                        <InputRadio
                            name="jaFezAcompanhamentoPsiquiatrico"
                            label="Você já fez acompanhamento psiquiátrico? "
                            :options="['Sim', 'Não']"
                            v-model:model-value="patientData.jaFezAcompanhamentoPsiquiatrico"
                            required
                        ></InputRadio>
                        <InputRadio
                            name="atualmenteFazAcompanhamentoPsiquiatrico"
                            label="Você está atualmente em acompanhamento psiquiátrico? "
                            :options="['Sim', 'Não']"
                            v-model:model-value="patientData.atualmenteFazAcompanhamentoPsiquiatrico"
                            required
                        ></InputRadio>
                        <InputRadio
                            name="jaFezAcompanhamentoPsicologico"
                            label="Você já fez acompanhamento psicológico?"
                            :options="['Sim', 'Não']"
                            v-model:model-value="patientData.jaFezAcompanhamentoPsicologico"
                            required
                        ></InputRadio>
                        <InputRadio
                            name="atualmenteFazAcompanhamentoPsicologico"
                            label="Você está atualmente em acompanhamento psicológico? "
                            :options="['Sim', 'Não']"
                            v-model:model-value="patientData.atualmenteFazAcompanhamentoPsicologico"
                            required
                        ></InputRadio>
                    </div>
                </div>

                <div class="patient-register-buttons">
                    <AppButton
                        variant="outline"
                        text="Cancelar"
                        :has-icon="true"
                        :custom="{ 'flex-direction': 'row-reverse' }"
                    >
                        <v-icon name="md-close" scale="1.2"></v-icon>
                    </AppButton>
                    <AppButton
                        text="Salvar"
                        type="submit"
                        :has-icon="true"
                        variant="default"
                    >
                        <v-icon
                            name="md-chevronright-round"
                            scale="1.2"
                        ></v-icon>
                    </AppButton>
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.patient-register {
    &-wrapper {
        @include contentWrapper(2rem 2rem);
    }

    &-title {
        color: var(--color-title);
        margin-bottom: 1.5rem;
    }

    &-section {
        position: relative;
        border-radius: 0.5rem;
        border: 1px solid var(--color-border-default);
        background-color: var(--color-background-default);
        padding: 1.5rem;
        margin-bottom: 1.5rem;

        &-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem 1.5rem;
            margin-top: 1.5rem;
        }

        &-column {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1.5rem;
        }
    }

    &-buttons {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
}
</style>
import { usePatientStore } from "../../stores/patient"; usePatientStore,
