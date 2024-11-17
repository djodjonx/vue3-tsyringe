import mitt from "mitt";
import { reactive, UnwrapNestedRefs } from "vue";
import { cloneDeep } from "lodash-es";

type StateEvents = {
  reset: string | undefined;
};

export const disposableEmitter = mitt<StateEvents>();

export default class WithState<T extends Record<string, any>> {
  public state: UnwrapNestedRefs<T> = reactive({} as T);

  constructor(
    private readonly originalState: T,
    private readonly routes?: string[]
  ) {
    this.setState();
    disposableEmitter.on("reset", (route: string | undefined) => {
      this.resetState(route);
    });
  }

  resetState(route?: string): void {
    if (!this.routes?.length || (route && this.routes.includes(route))) {
      this.setState();
    }
  }

  private setState() {
    Object.entries(this.originalState).forEach(([key, value]) => {
      this.state[key] = cloneDeep(value);
    });
  }
}
