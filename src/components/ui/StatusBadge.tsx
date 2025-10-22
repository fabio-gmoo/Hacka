type Props = { status: "pending"|"revealed"|"disputed"|"resolved"|"stale" };
export default function StatusBadge({ status }: Props) {
  const map: Record<string, string> = {
    pending:  "bg-state-warn text-black",
    revealed: "bg-state-ok text-white",
    resolved: "bg-state-ok text-white",
    disputed: "bg-state-danger text-white",
    stale:    "bg-state-warn text-black",
  };
  const label: Record<string,string> = {
    pending: "Pending", revealed: "Revealed", resolved: "Resolved", disputed: "Disputed", stale: "Stale",
  };
  return (
    <span className={`inline-block rounded-full px-2.5 py-1 text-xs ${map[status]}`}>
      {label[status]}
    </span>
  );
}
