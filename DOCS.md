# DOCS

## Purpose

- This file is the high-level documentation index for `candleaf-server-express`.
- It summarizes the repo layout and points to the detailed project docs generated alongside it.
- It is intentionally verbose so the project can be scanned quickly without opening source files first.
- Every line below is derived from files present in the repository tree at generation time.

## Documentation Set

- README.md: broad repository overview, dependency inventory, and source map
- docs/architecture.md: system structure, execution flow, and integration boundaries
- docs/development.md: scripts, setup workflow, configuration, and day-to-day development touchpoints
- docs/features.md: route, page, module, service, and feature inventory

## Repository Profile

- Name: `candleaf-server-express`
- Kind: `backend`
- Runtime: `Node.js`
- Framework: `Express`
- Rendering or execution model: `Server-rendered API/runtime backend`
- Package manager metadata: `pnpm@10.10.0`

## Scripts Snapshot

- `build`: `tsc -p tsconfig.json`
- `start`: `node dist/index.js`
- `test`: `echo "Error: no test specified" && exit 1`
- `dev`: `nodemon --ext ts --exec ts-node -r tsconfig-paths/register src/index.ts`
- `dev:build`: `pnpm run build && pnpm start`
- `lint`: `eslint --config ./eslint.config.ts --fix .`
- `lint:file`: `eslint --config ./eslint.config.ts --fix`

## Environment Variable Snapshot

- `MONGO_URI`
- `NODE_ENV`

## Top-Level Directories

- `.vscode/`
- `dist/`
- `docs/`
- `src/`

## Top-Level Files

- `.gitignore`
- `.prettierrc`
- `DOCS.md`
- `README.md`
- `eslint.config.ts`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `render.yaml`
- `tsc-log.txt`
- `tsconfig.json`

## Integration Snapshot

- Mongoose is declared
- Axios is declared for HTTP calls
- JWT tooling is declared
- bcryptjs is declared for password hashing
- SendGrid mail client is declared
- Zod validation is declared
- Render deployment configuration file is present

## Authentication Snapshot

- JWT-related dependencies are present
- Password hashing dependency bcryptjs is present
- Repository contains auth-related source files or routes

## Database Snapshot

- Mongoose-backed MongoDB access is present

## Primary Source Areas

- `src/` is present

## Detailed File Inventory

- `.prettierrc`
- `eslint.config.ts`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `render.yaml`
- `src/config/db.ts`
- `src/config/env.ts`
- `src/index.ts`
- `src/middleware/authGuard.ts`
- `src/middleware/logger.ts`
- `src/middleware/validateRequest.ts`
- `src/modules/v1/admin/admin.controller.ts`
- `src/modules/v1/admin/admin.routes.ts`
- `src/modules/v1/auth/auth.controller.ts`
- `src/modules/v1/auth/auth.model.ts`
- `src/modules/v1/auth/auth.repo.ts`
- `src/modules/v1/auth/auth.routes.ts`
- `src/modules/v1/auth/auth.service.ts`
- `src/modules/v1/cart/cart.controller.ts`
- `src/modules/v1/cart/cart.model.ts`
- `src/modules/v1/cart/cart.service.ts`
- `src/modules/v1/checkout/checkout.controller.ts`
- `src/modules/v1/checkout/checkout.routes.ts`
- `src/modules/v1/order/counter.model.ts`
- `src/modules/v1/order/order.controller.ts`
- `src/modules/v1/order/order.model.ts`
- `src/modules/v1/order/order.repo.ts`
- `src/modules/v1/order/order.routes.ts`
- `src/modules/v1/order/order.service.ts`
- `src/modules/v1/products/product.controller.ts`
- `src/modules/v1/products/product.model.ts`
- `src/modules/v1/products/product.repo.ts`
- `src/modules/v1/products/product.routes.ts`
- `src/modules/v1/products/product.service.ts`
- `src/modules/v1/public/contact.controller.ts`
- `src/modules/v1/public/contact.model.ts`
- `src/modules/v1/public/public.routes.ts`
- `src/modules/v1/user/user.controller.ts`
- `src/modules/v1/user/user.model.ts`
- `src/modules/v1/user/user.repo.ts`
- `src/modules/v1/user/user.routes.ts`
- `src/modules/v1/user/user.service.ts`
- `src/modules/v1/wishlist/wishlist.controller.ts`
- `src/modules/v1/wishlist/wishlist.model.ts`
- `src/modules/v1/wishlist/wishlist.repo.ts`
- `src/modules/v1/wishlist/wishlist.routes.ts`
- `src/modules/v1/wishlist/wishlist.service.ts`
- `src/providers/google.provider.ts`
- `src/providers/sendgrid.provider.ts`
- `src/routes/health.ts`
- `src/routes/index.ts`
- `src/schemas/authSchema.ts`
- `src/schemas/cartSchema.ts`
- `src/schemas/envSchema.ts`
- `src/schemas/index.ts`
- `src/schemas/orderSchema.ts`
- `src/schemas/productSchema.ts`
- `src/schemas/userSchema.ts`
- `src/schemas/wishlistSchema.ts`
- `src/scripts/clear-db.ts`
- `src/types/express.d.ts`
- `src/types/index.ts`
- `src/types/user.ts`
- `src/utils/generate.ts`
- `src/utils/getNextOrderNumber.ts`
- `src/utils/index.ts`
- `src/utils/jwt.ts`
- `src/utils/password.ts`
- `tsconfig.json`

## Known Unknowns

- No dedicated test files were categorized from the scanned repository tree
