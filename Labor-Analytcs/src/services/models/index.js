import getToken from "./getToken";
import getUserInfos from "./getUserInfos";
import sendPasswordCode from "./sendRecoveryPasswordCode";
import sendNewPassword from "./sendRecoveryPasswordNewPassword";
import sendPasswordRequest from "./sendRecoveryPasswordRequest";
import sendCreateAccessModel from "./sendCreateAccess";
import getListaAcessos from "./getListaAcessos";
import getOperadores from "./getOperadores";
import sendUpdateUserAccessModel from "./sendUpdateUserAccess";
import getFiltersStatusInProcess from "./getFiltersStatusInProcess";

// Productivity
import getGlobalProductivityChart from "./getProductivityGlobalChart";
import getProductivityProcessCharts from "./getProductivityProcessCharts";
import getProductivityOrdering from "./getProductivityOrdering";
import getHistoricProductivityChart from "./getProductivityHistoricChart";

// Capacity
import getGlobalCapacityChart from "./getCapacityGlobalChart";
import getCapacityProcessCharts from "./getCapacityProcessCharts";
import getCapacityHistoricCharts from "./getCapacityHistoricCharts";
import getCapacityCheckoutProcessCharts from "./getCapacityCheckoutProcessCharts";
import getCapacityLoadProcessCharts from "./getCapacityLoadProcessCharts";
import getCapacityMovementProcessCharts from "./getCapacityMovementProcessCharts";
import getCapacitySeparationProcessCharts from "./getCapacitySeparationProcessCharts";
import getCapacityHistoricCheckoutChart from "./getCapacityHistoricCheckoutChart";
import getCapacityHistoricLoadChart from "./getCapacityHistoricLoadChart";
import getCapacityHistoricMovementChart from "./getCapacityHistoricMovementChart";
import getCapacityHistoricSeparationChart from "./getCapacityHistoricSeparationChart";
import getCapacityIdleOrdering from "./getCapacityIdleOrdering";

// Costs
import getCostsServingList from "./getCostsServingList";
import getCostsPeriodResult from "./getCostsPeriodResult";
import getCostsPeriodResultBarChart from "./getCostsPeriodResultBarChart";
import getCostsIdleProcessCharts from "./getCostsIdleProcessCharts";
import getCostsProcessTable from "./getCostsProcessTable";
import getCostsDimensionsTable from "./getCostsDimensionsTable";
import getCostsProcessChart from "./getCostsProcessChart";
import getCostsDimensionsChart from "./getCostsDimensionsChart";

// Opportunities
import getOpportunitiesCapacitySummary from "./getOpportunitiesCapacitySummary";
import getOpportunitiesProductivitySummary from "./getOpportunitiesProductivitySummary";
import getOpportunitiesSummary from "./getOpportunitiesSummary";
import getOpportunitiesDimensionsResultTable from "./getOpportunitiesDimensionsResultTable";
import getOpportunitiesDimensionsResultChart from "./getOpportunitiesDimensionsResultChart";
import getOpportunitiesUnassignedHours from "./getOpportunitiesUnassignedHours";

// Setup/Equações
import getEquationsSetup from "./getEquationsSetup";
import getPerformedEquationsSetup from "./getPerformedEquationsSetup";

// Setup/Operadores
import getExtraHours from "./getExtraHours";
import getOperators from "./getOperators";
import getTurns from "./getTurns";
import getWorkShiftFilter from "./getWorkShiftFilter";
import getWorkShift from "./getWorkShift";
import getSectorsFilter from "./getSectorsFilter";
import getSectors from "./getSectors";
import getStatusFilter from "./getStatusFilter";
import getStatus from "./getStatus";
import getOpType from "./getOpType";
import getOpTypeFilter from "./getOpTypeFilter";

// Relatório
import getReportList from "./getReportList";

const models = {
  getToken,
  getUserInfos,
  sendPasswordCode,
  sendNewPassword,
  sendPasswordRequest,
  sendCreateAccessModel,
  getListaAcessos,
  sendUpdateUserAccessModel,
  getOperadores,
  getFiltersStatusInProcess,

  // Productivity
  getGlobalProductivityChart,
  getProductivityProcessCharts,
  getProductivityOrdering,
  getHistoricProductivityChart,

  // Capacity
  getGlobalCapacityChart,
  getCapacityProcessCharts,
  getCapacityHistoricCharts,
  getCapacityCheckoutProcessCharts,
  getCapacityLoadProcessCharts,
  getCapacityMovementProcessCharts,
  getCapacitySeparationProcessCharts,
  getCapacityHistoricCheckoutChart,
  getCapacityHistoricLoadChart,
  getCapacityHistoricMovementChart,
  getCapacityHistoricSeparationChart,
  getCapacityIdleOrdering,

  // Costs
  getCostsServingList,
  getCostsPeriodResult,
  getCostsPeriodResultBarChart,
  getCostsIdleProcessCharts,
  getCostsProcessTable,
  getCostsDimensionsTable,
  getCostsProcessChart,
  getCostsDimensionsChart,

  // Opportunities
  getOpportunitiesCapacitySummary,
  getOpportunitiesProductivitySummary,
  getOpportunitiesSummary,
  getOpportunitiesDimensionsResultTable,
  getOpportunitiesDimensionsResultChart,
  getOpportunitiesUnassignedHours,

  // Setup/Equações
  getEquationsSetup,
  getPerformedEquationsSetup,

  // Setup/Operadores
  getExtraHours,
  getOperators,
  getTurns,
  getWorkShiftFilter,
  getSectorsFilter,
  getSectors,
  getWorkShift,
  getStatusFilter,
  getStatus,
  getOpType,
  getOpTypeFilter,

  // Relatorio
  getReportList,
};

export default models;
