import {
    ACCT,
    AGED,
    AGRI,
    AFSC,
    AFRA,
    ANFS,
    ANTH,
    APEC,
    ARAB,
    ART,
    ARTC,
    ARTH,
    ARSC,
    ASIA,
    BHAN,
    BISC,
    BMEG,
    BREG,
    BUEC,
    BUAD,
    DIST,
    CHEG,
    CHEM,
    CHIN,
    CIEG,
    CGSC,
    CMLT,
    COMM,
    CSCD,
    CISC,
    CPEG,
    CRJU,
    DANC,
    DISA,
    ECON,
    EDUC,
    ELEG,
    ENEP,
    EGGG,
    ENGL,
    ENWC,
    ENTR,
    ENSC,
    ENVR,
    GEOG,
    FASH,
    FINC,
    FREN,
    GAME,
    GEOL,
    GRMN,
    GREK,
    HLPR,
    HDES,
    HLTH,
    HEBR,
    HIST,
    HONR,
    HOSP,
    HDFS,
    ITAL,
    JAPN,
    JWST,
    JOUR,
    KAAP,
    LARC,
    LLCU,
    LATN,
    LAMS,
    LEAD,
    LEST,
    LING,
    MISY,
    MAST,
    MATH,
    MCST,
    MSEG,
    MEEG,
    MMSC,
    MLSC,
    MSST,
    MUSC,
    MUED,
    NSCI,
    NURS,
    NTDT,
    PHIL,
    PHYT,
    PHYS,
    PLSC,
    POSC,
    PORT,
    PSYC,
    RUSS,
    SCEN,
    SOCI,
    SPAN,
    SPTM,
    STAT,
    THEA,
    UNIV,
    SPPA,
    UAPP,
    WOMS,
    BINF,
    BMSC,
    BMBA,
    EAMC,
    SMED,
    EDLM,
    EPID,
    EVAL,
    FSAN,
    HSAD,
    MALS,
    PRES,
    PCS
} from "./Courses/Keys";
import { DataCourse } from "./DataCourse";

export type RawDataCourses = {
    ACCT: { [key in ACCT]: DataCourse };
    AGED: { [key in AGED]: DataCourse };
    AGRI: { [key in AGRI]: DataCourse };
    AFSC: { [key in AFSC]: DataCourse };
    AFRA: { [key in AFRA]: DataCourse };
    ANFS: { [key in ANFS]: DataCourse };
    ANTH: { [key in ANTH]: DataCourse };
    APEC: { [key in APEC]: DataCourse };
    ARAB: { [key in ARAB]: DataCourse };
    ART: { [key in ART]: DataCourse };
    ARTC: { [key in ARTC]: DataCourse };
    ARTH: { [key in ARTH]: DataCourse };
    ARSC: { [key in ARSC]: DataCourse };
    ASIA: { [key in ASIA]: DataCourse };
    BHAN: { [key in BHAN]: DataCourse };
    BISC: { [key in BISC]: DataCourse };
    BMEG: { [key in BMEG]: DataCourse };
    BREG: { [key in BREG]: DataCourse };
    BUEC: { [key in BUEC]: DataCourse };
    BUAD: { [key in BUAD]: DataCourse };
    DIST: { [key in DIST]: DataCourse };
    CHEG: { [key in CHEG]: DataCourse };
    CHEM: { [key in CHEM]: DataCourse };
    CHIN: { [key in CHIN]: DataCourse };
    CIEG: { [key in CIEG]: DataCourse };
    CGSC: { [key in CGSC]: DataCourse };
    CMLT: { [key in CMLT]: DataCourse };
    COMM: { [key in COMM]: DataCourse };
    CSCD: { [key in CSCD]: DataCourse };
    CISC: { [key in CISC]: DataCourse };
    CPEG: { [key in CPEG]: DataCourse };
    CRJU: { [key in CRJU]: DataCourse };
    DANC: { [key in DANC]: DataCourse };
    DISA: { [key in DISA]: DataCourse };
    ECON: { [key in ECON]: DataCourse };
    EDUC: { [key in EDUC]: DataCourse };
    ELEG: { [key in ELEG]: DataCourse };
    ENEP: { [key in ENEP]: DataCourse };
    EGGG: { [key in EGGG]: DataCourse };
    ENGL: { [key in ENGL]: DataCourse };
    ENWC: { [key in ENWC]: DataCourse };
    ENTR: { [key in ENTR]: DataCourse };
    ENSC: { [key in ENSC]: DataCourse };
    ENVR: { [key in ENVR]: DataCourse };
    GEOG: { [key in GEOG]: DataCourse };
    FASH: { [key in FASH]: DataCourse };
    FINC: { [key in FINC]: DataCourse };
    FREN: { [key in FREN]: DataCourse };
    GAME: { [key in GAME]: DataCourse };
    GEOL: { [key in GEOL]: DataCourse };
    GRMN: { [key in GRMN]: DataCourse };
    GREK: { [key in GREK]: DataCourse };
    HLPR: { [key in HLPR]: DataCourse };
    HDES: { [key in HDES]: DataCourse };
    HLTH: { [key in HLTH]: DataCourse };
    HEBR: { [key in HEBR]: DataCourse };
    HIST: { [key in HIST]: DataCourse };
    HONR: { [key in HONR]: DataCourse };
    HOSP: { [key in HOSP]: DataCourse };
    HDFS: { [key in HDFS]: DataCourse };
    ITAL: { [key in ITAL]: DataCourse };
    JAPN: { [key in JAPN]: DataCourse };
    JWST: { [key in JWST]: DataCourse };
    JOUR: { [key in JOUR]: DataCourse };
    KAAP: { [key in KAAP]: DataCourse };
    LARC: { [key in LARC]: DataCourse };
    LLCU: { [key in LLCU]: DataCourse };
    LATN: { [key in LATN]: DataCourse };
    LAMS: { [key in LAMS]: DataCourse };
    LEAD: { [key in LEAD]: DataCourse };
    LEST: { [key in LEST]: DataCourse };
    LING: { [key in LING]: DataCourse };
    MISY: { [key in MISY]: DataCourse };
    MAST: { [key in MAST]: DataCourse };
    MATH: { [key in MATH]: DataCourse };
    MCST: { [key in MCST]: DataCourse };
    MSEG: { [key in MSEG]: DataCourse };
    MEEG: { [key in MEEG]: DataCourse };
    MMSC: { [key in MMSC]: DataCourse };
    MLSC: { [key in MLSC]: DataCourse };
    MSST: { [key in MSST]: DataCourse };
    MUSC: { [key in MUSC]: DataCourse };
    MUED: { [key in MUED]: DataCourse };
    NSCI: { [key in NSCI]: DataCourse };
    NURS: { [key in NURS]: DataCourse };
    NTDT: { [key in NTDT]: DataCourse };
    PHIL: { [key in PHIL]: DataCourse };
    PHYT: { [key in PHYT]: DataCourse };
    PHYS: { [key in PHYS]: DataCourse };
    PLSC: { [key in PLSC]: DataCourse };
    POSC: { [key in POSC]: DataCourse };
    PORT: { [key in PORT]: DataCourse };
    PSYC: { [key in PSYC]: DataCourse };
    RUSS: { [key in RUSS]: DataCourse };
    SCEN: { [key in SCEN]: DataCourse };
    SOCI: { [key in SOCI]: DataCourse };
    SPAN: { [key in SPAN]: DataCourse };
    SPTM: { [key in SPTM]: DataCourse };
    STAT: { [key in STAT]: DataCourse };
    THEA: { [key in THEA]: DataCourse };
    UNIV: { [key in UNIV]: DataCourse };
    SPPA: { [key in SPPA]: DataCourse };
    UAPP: { [key in UAPP]: DataCourse };
    WOMS: { [key in WOMS]: DataCourse };
    BINF: { [key in BINF]: DataCourse };
    BMSC: { [key in BMSC]: DataCourse };
    BMBA: { [key in BMBA]: DataCourse };
    EAMC: { [key in EAMC]: DataCourse };
    SMED: { [key in SMED]: DataCourse };
    EDLM: { [key in EDLM]: DataCourse };
    EPID: { [key in EPID]: DataCourse };
    EVAL: { [key in EVAL]: DataCourse };
    FSAN: { [key in FSAN]: DataCourse };
    HSAD: { [key in HSAD]: DataCourse };
    MALS: { [key in MALS]: DataCourse };
    PRES: { [key in PRES]: DataCourse };
    PCS: { [key in PCS]: DataCourse };
} & { [key: string]: object };
