'use client';

type OrdersErrorProps = {
  error: Error;
  reset: () => void;
};

export default function OrdersError({ error, reset }: OrdersErrorProps) {
  return (
    <div className='flex min-h-64 flex-col items-center justify-center gap-4'>
      <p className='font-medium'>Pesanan gagal dimuat.</p>
      <p className='text-sm text-muted-foreground'>{error.message}</p>

      <button type='button' onClick={reset}>
        Coba lagi
      </button>
    </div>
  );
}
