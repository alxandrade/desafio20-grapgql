import User from "../models/modeloUser.js";
import Repository from "./repository.service.js";

export default class UserService extends Repository {
  constructor(dao) {
    super(dao, User.model);
  }
}
