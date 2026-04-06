export function formatPrice(amount: number, currency = 'THB'): string {
  if (currency === 'THB') {
    return `฿${amount.toLocaleString('th-TH')}`;
  }
  return `${amount.toLocaleString()}`;
}

export function formatMonthlyPrice(monthly: number, term: number): string {
  return `${formatPrice(monthly)}/เดือน นาน ${term} เดือน`;
}
