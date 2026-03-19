# Development

## Development Orientation

- Repository: `candleaf-server-express`
- Package manager metadata: `pnpm@10.10.0`
- Suggested install command from package manager metadata: `pnpm install`
- Commands below are limited to scripts or toolchain files that are actually present in the repo.
- This file is meant to help with local work, maintenance, and scanning the implementation surface area.

## Available Scripts

- `build`: `tsc -p tsconfig.json`
- `start`: `node dist/index.js`
- `test`: `echo "Error: no test specified" && exit 1`
- `dev`: `nodemon --ext ts --exec ts-node -r tsconfig-paths/register src/index.ts`
- `dev:build`: `pnpm run build && pnpm start`
- `lint`: `eslint --config ./eslint.config.ts --fix .`
- `lint:file`: `eslint --config ./eslint.config.ts --fix`

## Development Workflow Notes

- Install path should be checked against package manager metadata before local development: `pnpm@10.10.0`.
- Build, dev, lint, format, and test tasks are listed exactly as declared in `package.json` when present.
- No dependency installation or build execution was performed for this documentation pass.
- Script `dev` is available and may be relevant for local workflow review.
- Script `build` is available and may be relevant for local workflow review.
- Script `start` is available and may be relevant for local workflow review.
- Script `test` is available and may be relevant for local workflow review.
- Script `lint` is available and may be relevant for local workflow review.

## Configuration Files

- `.prettierrc`
- `eslint.config.ts`
- `package.json`
- `pnpm-workspace.yaml`
- `render.yaml`
- `tsconfig.json`

## Environment Variable Reference

- `MONGO_URI`
- `NODE_ENV`

## Top-Level Directory Checklist

- `.vscode/`
- `dist/`
- `docs/`
- `src/`

## Entry Points And Boot Files

- `src/index.ts`

## Config And Schema Files

- `src/config/db.ts`
- `src/config/env.ts`

## Service, Data, Or Backend Touchpoint Files

- `src/schemas/authSchema.ts`
- `src/schemas/cartSchema.ts`
- `src/schemas/envSchema.ts`
- `src/schemas/index.ts`
- `src/schemas/orderSchema.ts`
- `src/schemas/productSchema.ts`
- `src/schemas/userSchema.ts`
- `src/schemas/wishlistSchema.ts`

## State, Middleware, Hook, Or Provider Files

- `src/middleware/authGuard.ts`
- `src/middleware/logger.ts`
- `src/middleware/validateRequest.ts`

## Testing And Verification Files

- No testing files were categorized

## Runtime Dependencies

- `@sendgrid/mail`
- `axios`
- `bcryptjs`
- `connect-mongo`
- `cookie-parser`
- `cors`
- `dotenv`
- `express`
- `express-session`
- `jsonwebtoken`
- `moment-timezone`
- `mongoose`
- `nodemailer`
- `pino`
- `pino-pretty`
- `stripe`
- `zod`

## Development Dependencies

- `@types/bcrypt`
- `@types/bcryptjs`
- `@types/cookie-parser`
- `@types/cors`
- `@types/express`
- `@types/express-session`
- `@types/jsonwebtoken`
- `@types/node`
- `@types/nodemailer`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `jiti`
- `nodemon`
- `pino-http`
- `prettier`
- `rimraf`
- `ts-node`
- `tsconfig-paths`
- `tsx`
- `typescript`

## Additional Development Inventory

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
