import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";

export default function FilterControls() {
  const [showFilters, setShowFilters] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const updateQuery = (key: string, value: string) => {
    if (value === "" || value === "All") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    navigate(`?${params.toString()}`)
  }

  return (
    <div className="space-y-4">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        onClick={() => setShowFilters((prev) => !prev)}
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filter
      </Button>

      {showFilters && (
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span>Category</span>
            <Select
              defaultValue={params.get("category") || ""}
              onValueChange={(value) => updateQuery("category", value)}
            >
              <SelectTrigger className="w-[150px] h-8 text-sm">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="living">Living</SelectItem>
                <SelectItem value="dining">Dining</SelectItem>
                <SelectItem value="bedroom">Bedroom</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>Label</span>
            <Select
              defaultValue={params.get("label") || ""}
              onValueChange={(value) => updateQuery("label", value)}
            >
              <SelectTrigger className="w-[150px] h-8 text-sm">
                <SelectValue placeholder="Select label" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="New">New</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  )
}
