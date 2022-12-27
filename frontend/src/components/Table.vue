<script>
import { ref } from 'vue'

export default {
  setup() {
    const status = ['Pendente de confirmação', 'Pedido confirmado',
      'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida',
      'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado']
    const orders = ref([])
    const providers = []
    const showProviderInfo = ref(false)
    const currentProvider = ref(-1)

    fetch('http://localhost:3001/orders')
      .then(response => response.json())
      .then(data => {
        orders.value = data

        const providersIds = data.reduce((providers, curr) => [...providers, curr.providerId], [])

        providersIds.forEach((id) => {
          fetch(`http://localhost:3001/provider/${id}`)
            .then(response => response.json())
            .then((data) => providers.push(data))
        })


      })

    return { orders, status, providers, showProviderInfo, currentProvider }
  }
}

</script>

<template>
  <div class="w-4/5 bg-white min-h-screen rounded-xl">
    <div class="mt-20 border-t-2 p-8">
      <h1 class="flex items-center text-[#02143D]">
        <v-icon name="la-handshake" class="mx-4" scale="1.8" />
        <span class="text-xl font-semibold">Notas fiscais</span>
      </h1>
      <h2 class="text-gray-500 mt-2 ml-4">Visualize as notas fiscais que você tem.</h2>
    </div>
    <table class="w-11/12 mx-12">
      <thead class="">
        <tr class="text-sm text-gray-400 font-semibold text-start">
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders">
          <td>{{ order.orderNfId }}</td>
          <td>{{ order.Buyer.name }}</td>
          <td>{{ order.Provider.name }}</td>
          <td>{{ new Date(order.emissionDate).toLocaleDateString('pt-BR') }}</td>
          <td>{{ order.value }}</td>
          <td>{{ status[Number(order.orderStatusBuyer)] }}</td>
          <td>
            <div class="border text-center rounded-xl" @mouseenter="currentProvider = index; showProviderInfo = true" @mouseleave="showProviderInfo = false">Dados do cedente</div>
          </td>
        </tr>
        <div v-if="showProviderInfo">
          <p>Nome comercial: {{ providers[currentProvider].tradingName }}</p>
          <p>Localização: {{ `${providers[currentProvider].city} - ${providers[currentProvider].state}` }}</p>
          <p>Email: {{ providers[currentProvider].email }}</p>
        </div>
      </tbody>
    </table>
  </div>
</template>
