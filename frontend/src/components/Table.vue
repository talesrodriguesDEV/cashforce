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
  <div class="w-4/5 bg-white min-h-screen rounded-xl flex flex-col">
    <div class="mt-20 border-t-2 border-[#DFE2EB] p-8">
      <h1 class="flex items-center text-[#021B51]">
        <v-icon name="la-handshake" class="mx-4" scale="1.8" />
        <span class="text-xl font-semibold">Notas fiscais</span>
      </h1>
      <h2 class="text-gray-500 mt-2 ml-4">Visualize as notas fiscais que você tem.</h2>
    </div>
    <table class="w-11/12 mx-12 border-separate border-spacing-5">
      <thead>
        <tr class="text-sm text-[#A1A8B8]">
          <th class="text-start">NOTA FISCAL</th>
          <th class="text-start">SACADO</th>
          <th class="text-start">CEDENTE</th>
          <th class="text-start">EMISSÃO</th>
          <th class="text-start">VALOR</th>
          <th class="text-start">STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" class="text-[#4D5566] border-2">
          <td>{{ order.orderNfId }}</td>
          <td>{{ order.Buyer.name }}</td>
          <td>{{ order.Provider.name }}</td>
          <td>{{ new Date(order.emissionDate).toLocaleDateString('pt-BR') }}</td>
          <td class="text-[#00AD8C]">{{ `R$ ${Number(order.value).toLocaleString('pt-BR')},00` }}</td>
          <td class="text-[#00AD8C]">{{ status[Number(order.orderStatusBuyer)] }}</td>
          <td class="flex">
            <div class="border justify-center rounded-2xl py-1 px-7 text-sm hover:bg-gray-200" @mouseenter="currentProvider = index; showProviderInfo = true" @mouseleave="showProviderInfo = false">Dados do cedente</div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showProviderInfo" class="text-gray-700 text-4xl border-2 p-10 rounded-xl self-center mt-20">
      <p>Nome comercial: <span class="text-[#00AD8C]">{{ providers[currentProvider].tradingName }}</span></p>
      <p>Localização: <span class="text-[#00AD8C]">{{ `${providers[currentProvider].city} - ${providers[currentProvider].state}` }}</span></p>
      <p>Email: <span class="text-[#00AD8C]">{{ providers[currentProvider].email }}</span></p>
    </div>
  </div>
</template>
