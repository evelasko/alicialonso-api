# Migration `watch-20191105164554`

This migration has been generated by velasko at 11/5/2019, 4:45:55 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "alicialonso-dev"."Event" DROP COLUMN "subtitle",
ADD COLUMN "subtitle" text   ;

ALTER TABLE "alicialonso-dev"."News" DROP COLUMN "subtitle",
ADD COLUMN "subtitle" text   ;
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration watch-20191102144438..watch-20191105164554
--- datamodel.dml
+++ datamodel.dml
@@ -4,9 +4,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 // ###############################################################################################################
 // USER
```

## Photon Usage

You can use a specific Photon built for this migration (watch-20191105164554)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/watch-20191105164554'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
