import { injectable } from "tsyringe";
import { ExampleApis } from "./ExampleApis";
import axios from "axios";

@injectable()
export class ExampleApisImp implements ExampleApis {
  get = async (): Promise<any> => {
    return await axios.get('https://cat-fact.herokuapp.com/facts');
  };
}
