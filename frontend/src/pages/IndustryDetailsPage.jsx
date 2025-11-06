import IndustryDetail from "../components/IndustryDetail";
import {industriesData} from "../utils/industries";
import { useParams } from "react-router-dom";

export default function IndustryPage() {
  const { slug } = useParams();
  return <IndustryDetail data={industriesData[slug]} />;
}
