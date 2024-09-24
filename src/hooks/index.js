import { AuthProvider } from "./auth";
import { DataProvider } from "./data";
import { FontProvider } from "./font";

export function AppProvider({ children }) {
  return (
    <FontProvider>
      <DataProvider>
        
        <AuthProvider>{children}</AuthProvider>
      </DataProvider>
    </FontProvider>
  );
}
