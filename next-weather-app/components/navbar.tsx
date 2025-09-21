import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  return (
    <nav className="pb-15">
      <ul className="flex justify-between items-center">
        <li>
          <Image
            src="/images/logo.svg"
            alt="This is the weather app logo"
            width={270}
            height={300}
          />
        </li>
        <li>
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Units" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Temperature</SelectLabel>
                <SelectItem value="c">Celsius (°C)</SelectItem>
                <SelectItem value="f">Fahrenheit (°F)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Wind Speed</SelectLabel>
                <SelectItem value="kmh">km/h</SelectItem>
                <SelectItem value="mph">mph</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Precipitation</SelectLabel>
                <SelectItem value="mm">Millimeters (mm)</SelectItem>
                <SelectItem value="in">Inches (in)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </li>
      </ul>
    </nav>
  );
}
