import { injectable } from "tsyringe";

@injectable()
export class ExampleWorker {

  get = async (): Promise<any> => {
    // 로직 수정
    return 123;
  };
}
