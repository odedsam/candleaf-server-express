# Architecture

## System Overview

- Repository: `candleaf-server-express`
- Runtime: `Node.js`
- Primary framework: `Express`
- Rendering or execution model: `Server-rendered API/runtime backend`
- The structure below is based on source folders, configuration files, and declared package metadata.
- If a relationship is not explicit in code or config, it is left as unknown instead of inferred.

## Architecture Entry Points

- `src/index.ts`

## Directory Responsibility Map

- `.vscode/`: top-level directory present in the repository
- `dist/`: top-level directory present in the repository
- `docs/`: top-level directory present in the repository
- `src/`: top-level directory present in the repository

## Routing, Page, Or Endpoint Layer

- `src/routes/health.ts`
- `src/routes/index.ts`

## Service, Data, Or Runtime Layer

- `src/schemas/authSchema.ts`
- `src/schemas/cartSchema.ts`
- `src/schemas/envSchema.ts`
- `src/schemas/index.ts`
- `src/schemas/orderSchema.ts`
- `src/schemas/productSchema.ts`
- `src/schemas/userSchema.ts`
- `src/schemas/wishlistSchema.ts`

## UI, Module, Or Presentation Layer

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

## Configuration And Schema Layer

- `src/config/db.ts`
- `src/config/env.ts`

## State, Hook, Provider, Or Middleware Layer

- `src/middleware/authGuard.ts`
- `src/middleware/logger.ts`
- `src/middleware/validateRequest.ts`

## Data Flow Notes

- The repository is organized around `Express` on top of `Node.js`.
- The detected execution model is `Server-rendered API/runtime backend`.
- Routes, pages, endpoints, or entry files are listed explicitly in this document when they were detected.
- Service, library, database, or integration files are separated into their own inventory groups for easier tracing.
- Configuration, schema, and environment references are documented from source files and root config files.
- Detected route or endpoint files suggest where requests or page transitions begin.
- Detected service or data files suggest where business logic or persistence concerns are concentrated.
- Detected state, provider, hook, or middleware files suggest cross-cutting runtime behavior.

## External Integration Boundaries

- Mongoose is declared
- Axios is declared for HTTP calls
- JWT tooling is declared
- bcryptjs is declared for password hashing
- SendGrid mail client is declared
- Zod validation is declared
- Render deployment configuration file is present

## Authentication And Access Notes

- JWT-related dependencies are present
- Password hashing dependency bcryptjs is present
- Repository contains auth-related source files or routes

## Database And Storage Notes

- Mongoose-backed MongoDB access is present

## Deployment And Infrastructure Notes

- Render deployment manifest is present at the repository root

## Architecture Support Inventory

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
