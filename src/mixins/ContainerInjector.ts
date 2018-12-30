import { Vue, Component, Inject } from 'vue-property-decorator'
import SERVICE_IDENTIFIER from '../ioc/identifiers'
import { Container } from 'inversify'

@Component
export default class ContainerInjector extends Vue {
  @Inject(SERVICE_IDENTIFIER.CONTAINER)
  protected _container!: Container
}

