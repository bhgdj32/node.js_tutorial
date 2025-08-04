// /app/dashboard/page.tsx
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';
import { fetchLatestInvoices } from '@/app/lib/data';
import { fetchCardData } from '@/app/lib/data';

export default async function Page() {
  const revenue =  await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const CardData = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <Card title = "Collected"  value = {CardData.totalPaidInvoices}  type = "collected" />
      <Card title = "Pending"  value = {CardData.totalPendingInvoices}  type = "pending" />
      <Card title = "Total Customer"  value = {CardData.numberOfCustomers}  type = "customers" />
      <Card title = "Total Invoices"  value = {CardData.numberOfInvoices}  type = "invoices" />
      <RevenueChart revenue={revenue}/>
      <LatestInvoices latestInvoices={latestInvoices}/>
    </main>
  );
}
