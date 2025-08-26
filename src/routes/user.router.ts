import { Router } from "express";
import { registerUserController } from "../controllers/user/register-user.controller";
import { login } from "../controllers/user/login.controller";
import { listUsersController } from "../controllers/user/list-users.controller";
import { getIdUserController } from "../controllers/user/get-user.controller";
import { updateLoginController } from "../controllers/user/update-login.controller";
import { deleteUserController } from "../controllers/user/delete-ser.controller";
import { updateRoleUserController } from "../controllers/user/update-role-user.controller";
import { validateEmailUser, checkEmailExists } from "../middlewares/user/validate-email";
import { authorizeRoleAdmin } from "../middlewares/user/authorize-role";
import { authorizeRoleMaster } from "../middlewares/user/authorize-role";
import { authenticateToken } from "../middlewares/user/authenticate-token";

const router = Router();
router.post("/register", validateEmailUser, registerUserController);
router.post("/login", login);
router.get("/", authenticateToken, authorizeRoleAdmin, listUsersController);
router.get("/:id", authenticateToken, authorizeRoleAdmin, getIdUserController);
router.patch("/:id", checkEmailExists, updateLoginController);
router.delete("/:id", authenticateToken, authorizeRoleMaster, deleteUserController);
router.patch("/:id/role", authenticateToken, authorizeRoleMaster, updateRoleUserController);

//para teste
//router.get("/users", listUsersController); 
//router.delete("/users/:id", deleteUserController);
//router.patch("/users/:id/role", updateRoleUserController);


export default router;