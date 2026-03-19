# Features

## Feature Inventory Overview

- Repository: `candleaf-server-express`
- Category: `backend`
- This file inventories routes, modules, services, state containers, UI surfaces, and supporting implementation files.
- The grouping is derived from folder names and file paths rather than undocumented assumptions about runtime behavior.

## Route, Page, And Endpoint Files

- `src/routes/health.ts`
- `src/routes/index.ts`

## UI, Module, Feature, And Layout Files

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

## Service, Data, And Library Files

- `src/schemas/authSchema.ts`
- `src/schemas/cartSchema.ts`
- `src/schemas/envSchema.ts`
- `src/schemas/index.ts`
- `src/schemas/orderSchema.ts`
- `src/schemas/productSchema.ts`
- `src/schemas/userSchema.ts`
- `src/schemas/wishlistSchema.ts`

## State, Hook, Provider, And Middleware Files

- `src/middleware/authGuard.ts`
- `src/middleware/logger.ts`
- `src/middleware/validateRequest.ts`

## Configuration, Schema, And Type Files

- `src/config/db.ts`
- `src/config/env.ts`

## Test And Verification Files

- No tests were categorized

## Support And Miscellaneous Source Files

- `.prettierrc`
- `eslint.config.ts`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `render.yaml`
- `src/index.ts`
- `src/providers/google.provider.ts`
- `src/providers/sendgrid.provider.ts`
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

## Feature-Level Notes

- Files are grouped by path-based feature cues such as `routes`, `pages`, `services`, `controllers`, `features`, and `components`.
- The inventory is intentionally path-oriented so the document remains faithful to the repository tree.
- When a behavior is not explicit from file names or config, it is marked as unknown rather than inferred.
- Backend repos emphasize routes, controllers, services, config, schemas, realtime layers, and tests.

## Known Unknowns

- No dedicated test files were categorized from the scanned repository tree

## Complete Scanned Source Inventory

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
