-- CreateTable
CREATE TABLE "ordered" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "ordered_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "productId" TEXT NOT NULL,
    "orderedId" TEXT NOT NULL,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ordered" ADD CONSTRAINT "ordered_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_orderedId_fkey" FOREIGN KEY ("orderedId") REFERENCES "ordered"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
