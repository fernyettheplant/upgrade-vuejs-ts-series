<template>
  <div class="container">
    <div v-if="quote">
      <h2>The joke is:</h2>
      <button
        class="btn btn-success"
        @click="getJoke"
      >
        Risk to get another joke
      </button>
      <blockquote>
        <p>{{ quote }}</p>
      </blockquote>
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios, { AxiosResponse } from 'axios'
import ChuckApiResponse from '@/models/ChuckApiResponse'

@Component
export default class Chuck extends Vue {
  private quote: string = ''

  async mounted (): Promise<void> {
    await this.getJoke()
  }

  private async getJoke (): Promise<void> {
    this.quote = ''
    const { data }: AxiosResponse<ChuckApiResponse> = await axios.get('/api/chuck')
    this.quote = data.joke
  }
}
</script>

<style scoped>
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
</style>
