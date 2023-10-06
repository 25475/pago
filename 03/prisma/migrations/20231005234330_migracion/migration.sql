-- CreateTable
CREATE TABLE "Factura" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Factura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pago" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "facturaId" INTEGER NOT NULL,
    "metodoDePagoId" INTEGER NOT NULL,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetodoDePago" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "MetodoDePago_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Factura_numero_key" ON "Factura"("numero");

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_metodoDePagoId_fkey" FOREIGN KEY ("metodoDePagoId") REFERENCES "MetodoDePago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
