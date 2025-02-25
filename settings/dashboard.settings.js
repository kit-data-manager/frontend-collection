//Show/hide the base-repo element on the dashboard.
let showBaseRepo=true;
//Show/hide the SearchUI BaseRepo element on the dashboard.
let showSearchUIBaseRepo=true;
//Show/hide the MetaStore element on the dashboard.
let showMetaStore=true;
//Show/hide the SearchUI MetaStore element on the dashboard.
let showSearchUIMetaStore=true;
//Show/hide the MappingService element on the dashboard.
let showMappingService=true;
//Show/hide the TypedPIDMaker element on the dashboard.
let showTypedPIDMaker=false;
//Show/hide the FDOBuilder element on the dashboard.
let showFDOBuilder=true
//Show/hide the SearchUI FDO element on the dashboard.
let showSearchUIFDO=true;
//Show/hide the FAIR-DOscope element on the dashboard.
let showFAIRDOscope=true;
//Show/hide the SKOSMOS service element on the dashboard.
let showEVOKSService=true;
//Show/hide the MonitoringUI element on the dashboard.
let showMonitoringUI=true;

//The app description used to customize the frontend, e.g., for a specific project with a custom title and subtitle.
let appDescription = {
    "app-logo":"./images/Logo_KIT.png",
    "app-title":"Frontend Collection Dashboard",
    "app-subtitle":"A collection of web frontends",
    "app-description":`<p>This collection of generic web frontends provides access to RESTful services of the KIT Data Manager
                          service portfolio. The idea is to have graphical user interfaces available such that certain base 
                          services can be directly used for performing basic tasks without the need of integrating them in 
                          your own frontends before being able to use them the first time.</p>
                          <p> However, for some application cases, these generic web frontends might even be sufficient for 
                          direct interaction with our services, and they might be offered to the end-user. To allow that, 
                          all frontends of this collection offer a certain degree of customization to slightly adapt their 
                          presentation to specific needs. </p>`
};
// The card description used to customize the frontend, e.g., for a specific card with a custom title and subtitle and image.
let baseRepoCardDescription = {
    "app-logo":"./images/disks.jpg",
    "app-title":"BaseRepo UI",
    "app-subtitle":"Manage and access your research data described by DataCite metadata."
}
let searchUIBaseRepoCardDescription = {
    "app-logo":"./images/search_base-repo.jpg",
    "app-title":"BaseRepo Search UI",
    "app-subtitle":"An exemplary search UI for metadata within information indexed by the BaseRepo instance."
}
let metastoreCardDescription = {
    "app-logo":"./images/metadata.jpg",
    "app-title":"MetaStore UI",
    "app-subtitle":"Manage and access your metadata schemas and documents."
}
let searchUIMetastoreCardDescription = {
    "app-logo":"./images/search_metastore.jpg",
    "app-title":"MetaStore Search UI",
    "app-subtitle":"An exemplary search UI for metadata within information indexed by the MetaStore instance."
}
let mappingServiceCardDescription = {
    "app-logo":"./images/mapping_service.jpg",
    "app-title":"Mapping Service",
    "app-subtitle":"View Mapping Service interface."
}
let typedPIDMakerCardDescription = {
    "app-logo":"./images/typed-pid-maker-full.svg",
    "app-title":"Typed PID Maker UI",
    "app-subtitle":"View all PIDs created with your Typed PID Maker instance."
}
let fdoBuilderCardDescription = {
    "app-logo":"./images/typed-pid-maker-full.svg",
    "app-title":"FDO Builder UI",
    "app-subtitle":"Graphical creation of FDOs."
}
let searchUIFDOCardDescription = {
    "app-logo":"./images/search_fdo.png",
    "app-title":"FAIR DO Search UI",
    "app-subtitle":"A basic search UI for querying FAIR Digital Objects indexed by the Typed PID Maker instance."
}
let fairdoscopeCardDescription = {
    "app-logo":"./images/search_fdo.png",
    "app-title":"FAIR-DOscope",
    "app-subtitle":"FAIR-DOscope is an easy-to-use, generic FAIR Digital Object viewer and browser."
}
let evoksServiceCardDescription = {
    "app-logo":"./images/skosmos.png",
    "app-title":"SKOSMOS service",
    "app-subtitle":"SKOSMOS is a web-based tool for exploring published controlled vocabularies."
}
let monitoringUICardDescription = {
    "app-logo":"./images/monitoring.jpg",
    "app-title":"Monitoring UI",
    "app-subtitle":"A clean and extensive monitoring UI for the demonstrator's backend services.<br/>\n" +
        "<i class=\"fa-solid fa-triangle-exclamation\"></i><b>Only for internal use.</b><i class=\"fa-solid fa-triangle-exclamation\"></i>"
}
