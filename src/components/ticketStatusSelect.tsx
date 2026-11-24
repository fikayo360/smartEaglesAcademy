
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

type TicketStatus =
  | "NEW"
  | "IN_PROGRESS"
  | "PENDING"
  | "RESOLVED"
  | "CLOSED";

interface TicketStatusSelectProps {
  currentStatus: TicketStatus;
  onStatusChange: (status: TicketStatus) => Promise<void>;
}

const statusOptions: {
  value: TicketStatus;
  label: string;
}[] = [
  { value: "NEW", label: "New" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "PENDING", label: "Pending" },
  { value: "RESOLVED", label: "Resolved" },
  { value: "CLOSED", label: "Closed" },
];

export function TicketStatusSelect({
  currentStatus,
  onStatusChange,
}: TicketStatusSelectProps) {
  const [status, setStatus] = useState<TicketStatus>(currentStatus);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleUpdate() {
    if (status === currentStatus || saving) return;

    setSaving(true);
    setError("");

    try {
      await onStatusChange(status);
    } catch {
      setError("Failed to update ticket status. Please try again.");
      setStatus(currentStatus);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Ticket status
      </label>

      <div className="flex flex-wrap items-center gap-2">
        <Select
          value={status}
          onValueChange={(value) =>
            setStatus(value as TicketStatus)
          }
          disabled={saving}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>

          <SelectContent>
            {statusOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleUpdate}
          disabled={saving || status === currentStatus}
        >
          {saving ? "Updating..." : "Update Status"}
        </Button>
      </div>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
