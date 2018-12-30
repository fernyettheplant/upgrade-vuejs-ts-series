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
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import ContainerInjector from '../mixins/ContainerInjector'
import SERVICE_IDENTIFIER from '../ioc/identifiers'
import IChuckNorrisService from '../services/interfaces/IChuckNorrisService'

@Component
export default class Chuck extends mixins(ContainerInjector) {
  private quote: string = ''
  private _chuckNorrisService!: IChuckNorrisService

  created () {
    this._chuckNorrisService = this._container.get<IChuckNorrisService>(SERVICE_IDENTIFIER.CHUCK_NORRIS_SERVICE)
  }

  async mounted (): Promise<void> {
    await this.getJoke()
  }

  private async getJoke (): Promise<void> {
    this.quote = ''
    this.quote = await this._chuckNorrisService.getJoke()
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
