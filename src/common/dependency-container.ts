import { ExampleApisImp } from "@request/apis/ExampleApisImp";
import { ExampleWorker } from "@request/workers/ExampleWorker";
import { container } from "tsyringe";

const injectDependency = () => {
  container.register("ExampleApis", {
    useClass: ExampleApisImp,
  });
  container.register("ExampleWorker", {
    useClass: ExampleWorker,
  });

};

export default injectDependency;
