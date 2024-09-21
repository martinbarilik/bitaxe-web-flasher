import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type BoardVersionSelectorProps = {
  deviceModel: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

const boardVersions: Record<string, string[]> = {
  ultra: ['201', '202', '203', '204', '205'],
  supra: ['401', '402'],
  ultrahex: ['302', '303'],
  // Add other device models and their board versions here
};

export default function BoardVersionSelector({ deviceModel, onValueChange, disabled }: BoardVersionSelectorProps) {
  const versions = boardVersions[deviceModel] || [];

  return (
    <Select onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger>
        <SelectValue placeholder="Select board version" />
      </SelectTrigger>
      <SelectContent>
        {versions.map((version) => (
          <SelectItem key={version} value={version}>
            {version}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}