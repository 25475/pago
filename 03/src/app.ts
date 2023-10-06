import { PrismaClient, Factura } from '@prisma/client';

const prisma = new PrismaClient();

const createFactura = async () => {
  try {
    const facturaCreated = await prisma.factura.create({
      data: {
        fecha: new Date(),
        total: 100.0,
        numero: 'F123', 
      },
    });
    console.log('Factura creada:', facturaCreated);
  } catch (error) {
    console.error('Error al crear la factura:', error);
  }
};

const queryFactura = async () => {
  try {
    const factura: Factura | null = await prisma.factura.findUnique({
      where: {
        id: 1, 
      },
    });
    console.log('Factura consultada:', factura);
  } catch (error) {
    console.error('Error al consultar la factura:', error);
  }
};
const updateFactura = async () => {
  try {
    const factura = await prisma.factura.update({
      where: {
        id: 1, 
      },
      data: {
        total: 150.0,
      },
    });
    console.log('Factura actualizada:', factura);
  } catch (error) {
    console.error('Error al actualizar la factura:', error);
  }
};
const deleteFactura = async () => {
  try {
    const factura = await prisma.factura.delete({
      where: {
        id: 1, 
      },
    });
    console.log('Factura eliminada:', factura);
  } catch (error) {
    console.error('Error al eliminar la factura:', error);
  }
};
(async () => {
  await createFactura();
  await queryFactura();
  await updateFactura();
  await deleteFactura();
})();
