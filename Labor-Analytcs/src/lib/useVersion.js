import jsonPackage from "../../package.json";

export default function useVersion() {
  return jsonPackage.version;
}
