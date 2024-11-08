import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    // {
    //   type: "doc",
    //   id: "./docs/intro",
    // },
    {
      type: "category",
      label: "Entrega",
      link: {
        type: "generated-index",
        title: "Entrega",
        slug: "/category/api-v1/entrega",
      },
      items: [
        {
          type: "doc",
          id: "api-v1/listagem-de-comprovantes-e-ocorrencias-de-entrega",
          label: "Listagem de comprovantes e ocorrências de entrega",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Fatura",
      link: {
        type: "generated-index",
        title: "Fatura",
        slug: "/category/api-v1/fatura",
      },
      items: [
        {
          type: "doc",
          id: "api-v1/listagem-de-faturas",
          label: "Listagem de faturas",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Filial",
      link: {
        type: "generated-index",
        title: "Filial",
        slug: "/category/api-v1/filial",
      },
      items: [
        {
          type: "doc",
          id: "api-v1/listagem-de-filiais",
          label: "Listagem de filiais",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v1/criacao-de-uma-nova-filial",
          label: "Criação de uma nova filial",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-v1/busca-filial-atraves-do-identificador",
          label: "Busca filial através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v1/remove-filial-atraves-do-identificador",
          label: "Remove filial através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-v1/edicao-parcial-de-uma-filial-atraves-do-identificador",
          label: "Edição parcial de uma filial através do identificador",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Motorista",
      link: {
        type: "generated-index",
        title: "Motorista",
        slug: "/category/api-v1/motorista",
      },
      items: [
        {
          type: "doc",
          id: "api-v1/listagem-de-motoristas",
          label: "Listagem de motoristas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v1/criacao-de-um-novo-motorista",
          label: "Criação de um novo motorista",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-v1/busca-motorista-atraves-do-identificador",
          label: "Busca motorista através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v1/edicao-parcial-de-um-motorista-atraves-do-identificador",
          label: "Edição parcial de um motorista através do identificador",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-v1/remove-motorista-atraves-do-identificador",
          label: "Remove motorista através do identificador",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Prestador",
      link: {
        type: "generated-index",
        title: "Prestador",
        slug: "/category/api-v1/prestador",
      },
      items: [
        {
          type: "doc",
          id: "api-v1/criacao-de-um-novo-prestador",
          label: "Criação de um novo prestador",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-v1/listagem-de-prestadores",
          label: "Listagem de prestadores",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v1/busca-prestador-atraves-do-identificador",
          label: "Busca prestador através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v1/remove-prestador-atraves-do-identificador",
          label: "Remove prestador através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-v1/edicao-parcial-de-um-prestador-atraves-do-identificador",
          label: "Edição parcial de um prestador através do identificador",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Proprietario",
      link: {
        type: "generated-index",
        title: "Proprietario",
        slug: "/category/api-v1/proprietario",
      },
      items: [
        {
          type: "doc",
          id: "api-v1/remove-proprietario-atraves-do-identificador",
          label: "Remove proprietário através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-v1/busca-proprietario-atraves-do-identificador",
          label: "Busca proprietário através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v1/listagem-de-proprietarios",
          label: "Listagem de proprietários",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v1/criacao-de-um-novo-proprietario",
          label: "Criação de um novo proprietário",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-v1/edicao-parcial-de-um-proprietario-atraves-do-identificador",
          label: "Edição parcial de um proprietário através do identificador",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Veiculo",
      link: {
        type: "generated-index",
        title: "Veiculo",
        slug: "/category/api-v1/veiculo",
      },
      items: [
        {
          type: "doc",
          id: "api-v1/listagem-de-veiculos",
          label: "Listagem de veículos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v1/criacao-de-um-novo-veiculo",
          label: "Criação de um novo veículo",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-v1/busca-veiculo-atraves-do-identificador",
          label: "Busca veiculo através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v1/remove-veiculo-atraves-do-identificador",
          label: "Remove veículo através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-v1/edicao-parcial-de-um-veiculo-atraves-do-identificador",
          label: "Edição parcial de um veículo através do identificador",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Viagem",
      link: {
        type: "generated-index",
        title: "Viagem",
        slug: "/category/api-v1/viagem",
      },
      items: [
        {
          type: "doc",
          id: "api-v1/criacao-de-um-nova-viagem",
          label: "Criação de um nova viagem",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-v1/cancela-uma-viagem-atraves-do-identificador",
          label: "Cancela uma viagem através do identificador",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-v1/edicao-parcial-de-uma-viagem-atraves-do-identificador",
          label: "Edição parcial de uma viagem através do identificador",
          className: "api-method patch",
        },
      ],
    },
  ],
};

//export default sidebar.apisidebar;
export default sidebar;
