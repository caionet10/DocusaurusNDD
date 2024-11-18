import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    // {
    //   type: "doc",
    //   id: "api_core_v1/nddelog-core-service-api",
    // },
    {
      type: "category",
      label: "Entrega",
      link: {
        type: "generated-index",
        title: "Entrega",
        slug: "/category/api_core_v1/entrega",
      },
      items: [
        {
          type: "doc",
          id: "api_core_v1/delivery-get-all",
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
        slug: "/category/api_core_v1/fatura",
      },
      items: [
        {
          type: "doc",
          id: "api_core_v1/invoice-get-all",
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
        slug: "/category/api_core_v1/filial",
      },
      items: [
        {
          type: "doc",
          id: "api_core_v1/branch-get-all",
          label: "Listagem de filiais",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/branch-post",
          label: "Criação de uma nova filial",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api_core_v1/branch-get-by-custom-identifier",
          label: "Busca filial através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/branch-delete",
          label: "Remove filial através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api_core_v1/branch-path",
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
        slug: "/category/api_core_v1/motorista",
      },
      items: [
        {
          type: "doc",
          id: "api_core_v1/driver-get-all",
          label: "Listagem de motoristas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/driver-post",
          label: "Criação de um novo motorista",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api_core_v1/driver-get-by-custom-identifier",
          label: "Busca motorista através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/driver-path",
          label: "Edição parcial de um motorista através do identificador",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api_core_v1/driver-delete",
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
        slug: "/category/api_core_v1/prestador",
      },
      items: [
        {
          type: "doc",
          id: "api_core_v1/provider-post",
          label: "Criação de um novo prestador",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api_core_v1/provider-get-all",
          label: "Listagem de prestadores",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/provider-get-by-custom-identifier",
          label: "Busca prestador através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/provider-delete",
          label: "Remove prestador através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api_core_v1/provider-patch",
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
        slug: "/category/api_core_v1/proprietario",
      },
      items: [
        {
          type: "doc",
          id: "api_core_v1/owner-delete",
          label: "Remove proprietário através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api_core_v1/owner-get-by-custom-identifier",
          label: "Busca proprietário através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/owner-get-all",
          label: "Listagem de proprietários",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/owner-post",
          label: "Criação de um novo proprietário",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api_core_v1/owner-patch",
          label: "Edição parcial de um proprietário através do identificador",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "v1",
      link: {
        type: "generated-index",
        title: "v1",
        slug: "/category/api_core_v1/v-1",
      },
      items: [
        {
          type: "doc",
          id: "api_core_v1/user-post",
          label: "User_Post",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api_core_v1/user-get-all",
          label: "User_GetAll",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/user-path",
          label: "User_Path",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api_core_v1/user-get-by-id",
          label: "User_GetById",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/user-toggle-status",
          label: "User_ToggleStatus",
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
        slug: "/category/api_core_v1/veiculo",
      },
      items: [
        {
          type: "doc",
          id: "api_core_v1/vehicle-get-all",
          label: "Listagem de veículos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/vehicle-post",
          label: "Criação de um novo veículo",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api_core_v1/vehicle-get-by-custom-identifier",
          label: "Busca veiculo através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api_core_v1/vehicle-delete",
          label: "Remove veículo através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api_core_v1/vehicle-patch",
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
        slug: "/category/api_core_v1/viagem",
      },
      items: [
        {
          type: "doc",
          id: "api_core_v1/travel-post",
          label: "Criação de um nova viagem",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api_core_v1/travel-cancel",
          label: "Cancela uma viagem através do identificador",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api_core_v1/travel-path",
          label: "Edição parcial de uma viagem através do identificador",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
