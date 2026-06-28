// ═══════════════════════════════════════════════════════════════════════
// Vite entry point
// Supabase fonksiyonlarını global (window) scope'a açar.
// HTML'deki inline onclick/kod bloklarının erişebilmesi için gerekli.
// ═══════════════════════════════════════════════════════════════════════
import * as XLSX from 'xlsx'
import {
  // Users
  sbLoginUser,
  sbGetUserByUsername,
  sbGetAllUsers,
  sbCreateUser,
  sbUpdateUser,
  sbDeleteUser,
  // Core
  sbLoadAllData,
  sbMigrateLocalDB,
  sbWipeAllData,
  sbWipeProjeData,
  // Settings & Audit
  sbGetSetting,
  sbSetSetting,
  sbInsertAuditLog,
  sbGetAuditLog,
  // Alet
  sbGetAletItems,
  sbInsertAletItem,
  sbInsertAletItems,
  sbUpdateAletItem,
  sbDeleteAletItem,
  // Saha
  sbGetSahaPanels,
  sbInsertSahaPanel,
  sbUpdateSahaPanel,
  sbDeleteSahaPanel,
  sbGetSahaLines,
  sbInsertSahaLine,
  sbDeleteSahaLine,
  sbGetSahaSockets,
  sbInsertSahaSocket,
  sbUpdateSahaSocket,
  sbDeleteSahaSocket,
  sbGetAllSahaSettings,
  sbSetSahaSetting,
  // Rapor
  sbGetRaporEntries,
  sbInsertRaporEntry,
  sbInsertRaporEntries,
  sbDeleteRaporEntry,
  sbDeleteRaporEntriesByIds,
  sbGetRaporEkipler,
  sbInsertRaporEkip,
  sbInsertRaporEkipler,
  // Gecici
  sbGetGeciciLib,
  sbInsertGeciciLibItem,
  sbInsertGeciciLibItems,
  sbUpdateGeciciLibItem,
  sbDeleteGeciciLibItem,
  sbGetGeciciMoves,
  sbInsertGeciciMove,
  sbInsertGeciciMoves,
  sbDeleteGeciciMove,
  sbDeleteGeciciMovesByIds,
  sbGetGeciciOrders,
  sbInsertGeciciOrder,
  sbInsertGeciciOrders,
  sbDeleteGeciciOrder,
  // Proje
  sbGetProjeBuildings,
  sbInsertProjeBuilding,
  sbInsertProjeBuildings,
  sbDeleteProjeBuilding,
  sbGetProjeSections,
  sbInsertProjeSection,
  sbInsertProjeSections,
  sbDeleteProjeSection,
  sbGetProjeSartnames,
  sbInsertProjeSartname,
  sbInsertProjeSartnames,
  sbUpdateProjeSartname,
  sbDeleteProjeSartname,
  sbGetProjeMaterials,
  sbInsertProjeMaterial,
  sbInsertProjeMaterials,
  sbUpdateProjeMaterial,
  sbDeleteProjeMaterial,
  sbDeleteProjeMaterials,
  sbGetProjeSpecs,
  sbInsertProjeSpec,
  sbInsertProjeSpecs,
  sbUpdateProjeSpec,
  sbDeleteProjeSpec,
  sbDeleteProjeSpecs,
  sbGetProjeItems,
  sbInsertProjeItem,
  sbInsertProjeItems,
  sbUpdateProjeItem,
  sbDeleteProjeItem,
  sbDeleteProjeItems,
  sbGetProjeOrders,
  sbInsertProjeOrder,
  sbInsertProjeOrders,
  sbDeleteProjeOrder,
  sbUpsertProjeMaterials,
  sbUpsertProjeSpecs,
  sbUpsertProjeItems,
} from './supabase.js'

// xlsx global
window.XLSX = XLSX

// ─── Users ───────────────────────────────────────────────────────────────────
window.sbLoginUser         = sbLoginUser
window.sbGetUserByUsername = sbGetUserByUsername
window.sbGetAllUsers       = sbGetAllUsers
window.sbCreateUser        = sbCreateUser
window.sbUpdateUser        = sbUpdateUser
window.sbDeleteUser        = sbDeleteUser

// ─── Core ────────────────────────────────────────────────────────────────────
window.sbLoadAllData       = sbLoadAllData
window.sbMigrateLocalDB    = sbMigrateLocalDB
window.sbWipeAllData       = sbWipeAllData
window.sbWipeProjeData     = sbWipeProjeData

// ─── Settings & Audit ────────────────────────────────────────────────────────
window.sbGetSetting        = sbGetSetting
window.sbSetSetting        = sbSetSetting
window.sbInsertAuditLog    = sbInsertAuditLog
window.sbGetAuditLog       = sbGetAuditLog

// ─── Alet ────────────────────────────────────────────────────────────────────
window.sbGetAletItems      = sbGetAletItems
window.sbInsertAletItem    = sbInsertAletItem
window.sbInsertAletItems   = sbInsertAletItems
window.sbUpdateAletItem    = sbUpdateAletItem
window.sbDeleteAletItem    = sbDeleteAletItem

// ─── Saha ────────────────────────────────────────────────────────────────────
window.sbGetSahaPanels     = sbGetSahaPanels
window.sbInsertSahaPanel   = sbInsertSahaPanel
window.sbUpdateSahaPanel   = sbUpdateSahaPanel
window.sbDeleteSahaPanel   = sbDeleteSahaPanel
window.sbGetSahaLines      = sbGetSahaLines
window.sbInsertSahaLine    = sbInsertSahaLine
window.sbDeleteSahaLine    = sbDeleteSahaLine
window.sbGetSahaSockets    = sbGetSahaSockets
window.sbInsertSahaSocket  = sbInsertSahaSocket
window.sbUpdateSahaSocket  = sbUpdateSahaSocket
window.sbDeleteSahaSocket  = sbDeleteSahaSocket
window.sbGetAllSahaSettings = sbGetAllSahaSettings
window.sbSetSahaSetting    = sbSetSahaSetting

// ─── Rapor ───────────────────────────────────────────────────────────────────
window.sbGetRaporEntries          = sbGetRaporEntries
window.sbInsertRaporEntry         = sbInsertRaporEntry
window.sbInsertRaporEntries       = sbInsertRaporEntries
window.sbDeleteRaporEntry         = sbDeleteRaporEntry
window.sbDeleteRaporEntriesByIds  = sbDeleteRaporEntriesByIds
window.sbGetRaporEkipler          = sbGetRaporEkipler
window.sbInsertRaporEkip          = sbInsertRaporEkip
window.sbInsertRaporEkipler       = sbInsertRaporEkipler

// ─── Gecici ──────────────────────────────────────────────────────────────────
window.sbGetGeciciLib          = sbGetGeciciLib
window.sbInsertGeciciLibItem   = sbInsertGeciciLibItem
window.sbInsertGeciciLibItems  = sbInsertGeciciLibItems
window.sbUpdateGeciciLibItem   = sbUpdateGeciciLibItem
window.sbDeleteGeciciLibItem   = sbDeleteGeciciLibItem
window.sbGetGeciciMoves        = sbGetGeciciMoves
window.sbInsertGeciciMove      = sbInsertGeciciMove
window.sbInsertGeciciMoves     = sbInsertGeciciMoves
window.sbDeleteGeciciMove      = sbDeleteGeciciMove
window.sbDeleteGeciciMovesByIds = sbDeleteGeciciMovesByIds
window.sbGetGeciciOrders       = sbGetGeciciOrders
window.sbInsertGeciciOrder     = sbInsertGeciciOrder
window.sbInsertGeciciOrders    = sbInsertGeciciOrders
window.sbDeleteGeciciOrder     = sbDeleteGeciciOrder

// ─── Proje ───────────────────────────────────────────────────────────────────
window.sbGetProjeBuildings     = sbGetProjeBuildings
window.sbInsertProjeBuilding   = sbInsertProjeBuilding
window.sbInsertProjeBuildings  = sbInsertProjeBuildings
window.sbDeleteProjeBuilding   = sbDeleteProjeBuilding
window.sbGetProjeSections      = sbGetProjeSections
window.sbInsertProjeSection    = sbInsertProjeSection
window.sbInsertProjeSections   = sbInsertProjeSections
window.sbDeleteProjeSection    = sbDeleteProjeSection
window.sbGetProjeSartnames     = sbGetProjeSartnames
window.sbInsertProjeSartname   = sbInsertProjeSartname
window.sbInsertProjeSartnames  = sbInsertProjeSartnames
window.sbUpdateProjeSartname   = sbUpdateProjeSartname
window.sbDeleteProjeSartname   = sbDeleteProjeSartname
window.sbGetProjeMaterials     = sbGetProjeMaterials
window.sbInsertProjeMaterial   = sbInsertProjeMaterial
window.sbInsertProjeMaterials  = sbInsertProjeMaterials
window.sbUpdateProjeMaterial   = sbUpdateProjeMaterial
window.sbDeleteProjeMaterial   = sbDeleteProjeMaterial
window.sbDeleteProjeMaterials  = sbDeleteProjeMaterials
window.sbGetProjeSpecs         = sbGetProjeSpecs
window.sbInsertProjeSpec       = sbInsertProjeSpec
window.sbInsertProjeSpecs      = sbInsertProjeSpecs
window.sbUpdateProjeSpec       = sbUpdateProjeSpec
window.sbDeleteProjeSpec       = sbDeleteProjeSpec
window.sbDeleteProjeSpecs      = sbDeleteProjeSpecs
window.sbGetProjeItems         = sbGetProjeItems
window.sbInsertProjeItem       = sbInsertProjeItem
window.sbInsertProjeItems      = sbInsertProjeItems
window.sbUpdateProjeItem       = sbUpdateProjeItem
window.sbDeleteProjeItem       = sbDeleteProjeItem
window.sbDeleteProjeItems      = sbDeleteProjeItems
window.sbGetProjeOrders        = sbGetProjeOrders
window.sbInsertProjeOrder      = sbInsertProjeOrder
window.sbInsertProjeOrders     = sbInsertProjeOrders
window.sbDeleteProjeOrder      = sbDeleteProjeOrder
window.sbUpsertProjeMaterials  = sbUpsertProjeMaterials
window.sbUpsertProjeSpecs      = sbUpsertProjeSpecs
window.sbUpsertProjeItems      = sbUpsertProjeItems
