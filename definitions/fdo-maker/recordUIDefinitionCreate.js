let uiDefinitionCreate = {
    "type": "fieldset",
    "items": [
        {
            "type": "tabs",
            "id": "navtabs_acl",
            "items": [
                {
                    "title": "Mandatory_Attributes",
                    "type": "tab",
                    "items": [
                        {
                            "title": "Human Readable Name",
                            "key": "customName",
                            "value": "MyObject"
                        },
                        {
                            "title": "Kernel Information Profile",
                            "key": "kernelInformationProfile",
                            "value": "21.T11148/b9b76f887845e32d29f7",
                            "readOnly": true
                        }, {
                            "title": "Digital Object Type",
                            "key": "digitalObjectType",
                            "placeholder": "1234/1234"
                        },
                        {
                            "title": "Digital Object Location",
                            "key": "digitalObjectLocation",
                            "placeholder": "https://hostname:port/data"
                        },
                        {
                            "title": "Creation Date",
                            "key": "dateCreated",
                            "placeholder": "yyyy-MM-ddThh:mm:ssZ",
                            "slots": "yMdhms",
                            "accept": "\\d",
                        },
                        {
                            "title": "License",
                            "key": "license",
                            "placeholder": "https://spdx.org/licenses/CC-BY-4.0.html",
                            "titleMap":{
                                "https://spdx.org/licenses/0BSD.html": "BSD Zero Clause License",
                                "https://spdx.org/licenses/AAL.html": "Attribution Assurance License",
                                "https://spdx.org/licenses/AFL-1.1.html": "Academic Free License v1.1",
                                "https://spdx.org/licenses/AFL-1.2.html": "Academic Free License v1.2",
                                "https://spdx.org/licenses/AFL-2.0.html": "Academic Free License v2.0",
                                "https://spdx.org/licenses/AFL-2.1.html": "Academic Free License v2.1",
                                "https://spdx.org/licenses/AFL-3.0.html": "Academic Free License v3.0",
                                "https://spdx.org/licenses/AGPL-1.0.html": "Affero General Public License v1.0",
                                "https://spdx.org/licenses/AGPL-3.0.html": "GNU Affero General Public License v3.0",
                                "https://spdx.org/licenses/AGPL-3.0-only.html": "GNU Affero General Public License v3.0 only",
                                "https://spdx.org/licenses/AGPL-3.0-or-later.html": "GNU Affero General Public License v3.0 or later",
                                "https://spdx.org/licenses/Apache-1.0.html": "Apache License 1.0",
                                "https://spdx.org/licenses/Apache-1.1.html": "Apache License 1.1",
                                "https://spdx.org/licenses/Apache-2.0.html": "Apache License 2.0",
                                "https://spdx.org/licenses/APL-1.0.html": "Adaptive Public License 1.0",
                                "https://spdx.org/licenses/APSL-1.0.html": "Apple Public Source License 1.0",
                                "https://spdx.org/licenses/APSL-1.1.html": "Apple Public Source License 1.1",
                                "https://spdx.org/licenses/APSL-1.2.html": "Apple Public Source License 1.2",
                                "https://spdx.org/licenses/APSL-2.0.html": "Apple Public Source License 2.0",
                                "https://spdx.org/licenses/Artistic-1.0.html": "Artistic License 1.0",
                                "https://spdx.org/licenses/Artistic-1.0-cl8.html": "Artistic License 1.0 w/clause 8",
                                "https://spdx.org/licenses/Artistic-1.0-Perl.html": "Artistic License 1.0 (Perl)",
                                "https://spdx.org/licenses/Artistic-2.0.html": "Artistic License 2.0",
                                "https://spdx.org/licenses/BitTorrent-1.1.html": "BitTorrent Open Source License v1.1",
                                "https://spdx.org/licenses/BSD-1-Clause.html": "BSD 1-Clause License",
                                "https://spdx.org/licenses/BSD-2-Clause.html": "BSD 2-Clause \"Simplified\" License",
                                "https://spdx.org/licenses/BSD-2-Clause-FreeBSD.html": "BSD 2-Clause FreeBSD License",
                                "https://spdx.org/licenses/BSD-2-Clause-NetBSD.html": "BSD 2-Clause NetBSD License",
                                "https://spdx.org/licenses/BSD-2-Clause-Patent.html": "BSD-2-Clause Plus Patent License",
                                "https://spdx.org/licenses/BSD-3-Clause.html": "BSD 3-Clause \"New\" or \"Revised\" License",
                                "https://spdx.org/licenses/BSD-3-Clause-Clear.html": "BSD 3-Clause Clear License",
                                "https://spdx.org/licenses/BSD-3-Clause-LBNL.html": "Lawrence Berkeley National Labs BSD variant license",
                                "https://spdx.org/licenses/BSD-4-Clause.html": "BSD 4-Clause \"Original\" or \"Old\" License",
                                "https://spdx.org/licenses/BSL-1.0.html": "Boost Software License 1.0",
                                "https://spdx.org/licenses/CAL-1.0.html": "Cryptographic Autonomy License 1.0",
                                "https://spdx.org/licenses/CAL-1.0-Combined-Work-Exception.html": "Cryptographic Autonomy License 1.0 (Combined Work Exception)",
                                "https://spdx.org/licenses/CATOSL-1.1.html": "Computer Associates Trusted Open Source License 1.1",
                                "https://spdx.org/licenses/CC-BY-4.0.html": "Creative Commons Attribution 4.0 International",
                                "https://spdx.org/licenses/CC-BY-SA-4.0.html": "Creative Commons Attribution Share Alike 4.0 International",
                                "https://spdx.org/licenses/CC0-1.0.html": "Creative Commons Zero v1.0 Universal",
                                "https://spdx.org/licenses/CDDL-1.0.html": "Common Development and Distribution License 1.0",
                                "https://spdx.org/licenses/CECILL-2.0.html": "CeCILL Free Software License Agreement v2.0",
                                "https://spdx.org/licenses/CECILL-2.1.html": "CeCILL Free Software License Agreement v2.1",
                                "https://spdx.org/licenses/CECILL-B.html": "CeCILL-B Free Software License Agreement",
                                "https://spdx.org/licenses/CECILL-C.html": "CeCILL-C Free Software License Agreement",
                                "https://spdx.org/licenses/CERN-OHL-P-2.0.html": "CERN Open Hardware Licence Version 2 - Permissive",
                                "https://spdx.org/licenses/CERN-OHL-S-2.0.html": "CERN Open Hardware Licence Version 2 - Strongly Reciprocal",
                                "https://spdx.org/licenses/CERN-OHL-W-2.0.html": "CERN Open Hardware Licence Version 2 - Weakly Reciprocal",
                                "https://spdx.org/licenses/ClArtistic.html": "Clarified Artistic License",
                                "https://spdx.org/licenses/CNRI-Python.html": "CNRI Python License",
                                "https://spdx.org/licenses/Condor-1.1.html": "Condor Public License v1.1",
                                "https://spdx.org/licenses/CPAL-1.0.html": "Common Public Attribution License 1.0",
                                "https://spdx.org/licenses/CPL-1.0.html": "Common Public License 1.0",
                                "https://spdx.org/licenses/CUA-OPL-1.0.html": "CUA Office Public License v1.0",
                                "https://spdx.org/licenses/ECL-1.0.html": "Educational Community License v1.0",
                                "https://spdx.org/licenses/ECL-2.0.html": "Educational Community License v2.0",
                                "https://spdx.org/licenses/eCos-2.0.html": "eCos license version 2.0",
                                "https://spdx.org/licenses/EFL-1.0.html": "Eiffel Forum License v1.0",
                                "https://spdx.org/licenses/EFL-2.0.html": "Eiffel Forum License v2.0",
                                "https://spdx.org/licenses/Entessa.html": "Entessa Public License v1.0",
                                "https://spdx.org/licenses/EPL-1.0.html": "Eclipse Public License 1.0",
                                "https://spdx.org/licenses/EPL-2.0.html": "Eclipse Public License 2.0",
                                "https://spdx.org/licenses/EUDatagrid.html": "EU DataGrid Software License",
                                "https://spdx.org/licenses/EUPL-1.1.html": "European Union Public License 1.1",
                                "https://spdx.org/licenses/EUPL-1.2.html": "European Union Public License 1.2",
                                "https://spdx.org/licenses/Fair.html": "Fair License",
                                "https://spdx.org/licenses/Frameworx-1.0.html": "Frameworx Open License 1.0",
                                "https://spdx.org/licenses/FSFAP.html": "FSF All Permissive License",
                                "https://spdx.org/licenses/FTL.html": "Freetype Project License",
                                "https://spdx.org/licenses/GFDL-1.1.html": "GNU Free Documentation License v1.1",
                                "https://spdx.org/licenses/GFDL-1.1-only.html": "GNU Free Documentation License v1.1 only",
                                "https://spdx.org/licenses/GFDL-1.1-or-later.html": "GNU Free Documentation License v1.1 or later",
                                "https://spdx.org/licenses/GFDL-1.2.html": "GNU Free Documentation License v1.2",
                                "https://spdx.org/licenses/GFDL-1.2-only.html": "GNU Free Documentation License v1.2 only",
                                "https://spdx.org/licenses/GFDL-1.2-or-later.html": "GNU Free Documentation License v1.2 or later",
                                "https://spdx.org/licenses/GFDL-1.3.html": "GNU Free Documentation License v1.3",
                                "https://spdx.org/licenses/GFDL-1.3-only.html": "GNU Free Documentation License v1.3 only",
                                "https://spdx.org/licenses/GFDL-1.3-or-later.html": "GNU Free Documentation License v1.3 or later",
                                "https://spdx.org/licenses/gnuplot.html": "gnuplot License",
                                "https://spdx.org/licenses/GPL-2.0.html": "GNU General Public License v2.0 only",
                                "https://spdx.org/licenses/GPL-2.0+.html": "GNU General Public License v2.0 or later",
                                "https://spdx.org/licenses/GPL-2.0-only.html": "GNU General Public License v2.0 only",
                                "https://spdx.org/licenses/GPL-2.0-or-later.html": "GNU General Public License v2.0 or later",
                                "https://spdx.org/licenses/GPL-3.0.html": "GNU General Public License v3.0 only",
                                "https://spdx.org/licenses/GPL-3.0+.html": "GNU General Public License v3.0 or later",
                                "https://spdx.org/licenses/GPL-3.0-only.html": "GNU General Public License v3.0 only",
                                "https://spdx.org/licenses/GPL-3.0-or-later.html": "GNU General Public License v3.0 or later",
                                "https://spdx.org/licenses/GPL-3.0-with-GCC-exception.html": "GNU General Public License v3.0 w/GCC Runtime Library exception",
                                "https://spdx.org/licenses/HPND.html": "Historical Permission Notice and Disclaimer",
                                "https://spdx.org/licenses/IJG.html": "Independent JPEG Group License",
                                "https://spdx.org/licenses/iMatix.html": "iMatix Standard Function Library Agreement",
                                "https://spdx.org/licenses/Imlib2.html": "Imlib2 License",
                                "https://spdx.org/licenses/Intel.html": "Intel Open Source License",
                                "https://spdx.org/licenses/IPA.html": "IPA Font License",
                                "https://spdx.org/licenses/IPL-1.0.html": "IBM Public License v1.0",
                                "https://spdx.org/licenses/ISC.html": "ISC License",
                                "https://spdx.org/licenses/Jam.html": "Jam License",
                                "https://spdx.org/licenses/LGPL-2.0.html": "GNU Library General Public License v2 only",
                                "https://spdx.org/licenses/LGPL-2.0+.html": "GNU Library General Public License v2 or later",
                                "https://spdx.org/licenses/LGPL-2.0-only.html": "GNU Library General Public License v2 only",
                                "https://spdx.org/licenses/LGPL-2.0-or-later.html": "GNU Library General Public License v2 or later",
                                "https://spdx.org/licenses/LGPL-2.1.html": "GNU Lesser General Public License v2.1 only",
                                "https://spdx.org/licenses/LGPL-2.1+.html": "GNU Lesser General Public License v2.1 or later",
                                "https://spdx.org/licenses/LGPL-2.1-only.html": "GNU Lesser General Public License v2.1 only",
                                "https://spdx.org/licenses/LGPL-2.1-or-later.html": "GNU Lesser General Public License v2.1 or later",
                                "https://spdx.org/licenses/LGPL-3.0.html": "GNU Lesser General Public License v3.0 only",
                                "https://spdx.org/licenses/LGPL-3.0+.html": "GNU Lesser General Public License v3.0 or later",
                                "https://spdx.org/licenses/LGPL-3.0-only.html": "GNU Lesser General Public License v3.0 only",
                                "https://spdx.org/licenses/LGPL-3.0-or-later.html": "GNU Lesser General Public License v3.0 or later",
                                "https://spdx.org/licenses/LiLiQ-P-1.1.html": "Licence Libre du Québec – Permissive version 1.1",
                                "https://spdx.org/licenses/LiLiQ-R-1.1.html": "Licence Libre du Québec – Réciprocité version 1.1",
                                "https://spdx.org/licenses/LiLiQ-Rplus-1.1.html": "Licence Libre du Québec – Réciprocité forte version 1.1",
                                "https://spdx.org/licenses/LPL-1.0.html": "Lucent Public License Version 1.0",
                                "https://spdx.org/licenses/LPL-1.02.html": "Lucent Public License v1.02",
                                "https://spdx.org/licenses/LPPL-1.2.html": "LaTeX Project Public License v1.2",
                                "https://spdx.org/licenses/LPPL-1.3a.html": "LaTeX Project Public License v1.3a",
                                "https://spdx.org/licenses/LPPL-1.3c.html": "LaTeX Project Public License v1.3c",
                                "https://spdx.org/licenses/MirOS.html": "The MirOS Licence",
                                "https://spdx.org/licenses/MIT.html": "MIT License",
                                "https://spdx.org/licenses/MIT-0.html": "MIT No Attribution",
                                "https://spdx.org/licenses/MIT-Modern-Variant.html": "MIT License Modern Variant",
                                "https://spdx.org/licenses/Motosoto.html": "Motosoto License",
                                "https://spdx.org/licenses/MPL-1.0.html": "Mozilla Public License 1.0",
                                "https://spdx.org/licenses/MPL-1.1.html": "Mozilla Public License 1.1",
                                "https://spdx.org/licenses/MPL-2.0.html": "Mozilla Public License 2.0",
                                "https://spdx.org/licenses/MPL-2.0-no-copyleft-exception.html": "Mozilla Public License 2.0 (no copyleft exception)",
                                "https://spdx.org/licenses/MS-PL.html": "Microsoft Public License",
                                "https://spdx.org/licenses/MS-RL.html": "Microsoft Reciprocal License",
                                "https://spdx.org/licenses/MulanPSL-2.0.html": "Mulan Permissive Software License, Version 2",
                                "https://spdx.org/licenses/Multics.html": "Multics License",
                                "https://spdx.org/licenses/NASA-1.3.html": "NASA Open Source Agreement 1.3",
                                "https://spdx.org/licenses/Naumen.html": "Naumen Public License",
                                "https://spdx.org/licenses/NCSA.html": "University of Illinois/NCSA Open Source License",
                                "https://spdx.org/licenses/NGPL.html": "Nethack General Public License",
                                "https://spdx.org/licenses/Nokia.html": "Nokia Open Source License",
                                "https://spdx.org/licenses/NOSL.html": "Netizen Open Source License",
                                "https://spdx.org/licenses/NPL-1.0.html": "Netscape Public License v1.0",
                                "https://spdx.org/licenses/NPL-1.1.html": "Netscape Public License v1.1",
                                "https://spdx.org/licenses/NPOSL-3.0.html": "Non-Profit Open Software License 3.0",
                                "https://spdx.org/licenses/NTP.html": "NTP License",
                                "https://spdx.org/licenses/Nunit.html": "Nunit License",
                                "https://spdx.org/licenses/OCLC-2.0.html": "OCLC Research Public License 2.0",
                                "https://spdx.org/licenses/ODbL-1.0.html": "Open Data Commons Open Database License v1.0",
                                "https://spdx.org/licenses/OFL-1.0.html": "SIL Open Font License 1.0",
                                "https://spdx.org/licenses/OFL-1.1.html": "SIL Open Font License 1.1",
                                "https://spdx.org/licenses/OFL-1.1-no-RFN.html": "SIL Open Font License 1.1 with no Reserved Font Name",
                                "https://spdx.org/licenses/OFL-1.1-RFN.html": "SIL Open Font License 1.1 with Reserved Font Name",
                                "https://spdx.org/licenses/OGTSL.html": "Open Group Test Suite License",
                                "https://spdx.org/licenses/OLDAP-2.3.html": "Open LDAP Public License v2.3",
                                "https://spdx.org/licenses/OLDAP-2.7.html": "Open LDAP Public License v2.7",
                                "https://spdx.org/licenses/OLDAP-2.8.html": "Open LDAP Public License v2.8",
                                "https://spdx.org/licenses/OLFL-1.3.html": "Open Logistics Foundation License Version 1.3",
                                "https://spdx.org/licenses/OpenSSL.html": "OpenSSL License",
                                "https://spdx.org/licenses/OSET-PL-2.1.html": "OSET Public License version 2.1",
                                "https://spdx.org/licenses/OSL-1.0.html": "Open Software License 1.0",
                                "https://spdx.org/licenses/OSL-1.1.html": "Open Software License 1.1",
                                "https://spdx.org/licenses/OSL-2.0.html": "Open Software License 2.0",
                                "https://spdx.org/licenses/OSL-2.1.html": "Open Software License 2.1",
                                "https://spdx.org/licenses/OSL-3.0.html": "Open Software License 3.0",
                                "https://spdx.org/licenses/PHP-3.0.html": "PHP License v3.0",
                                "https://spdx.org/licenses/PHP-3.01.html": "PHP License v3.01",
                                "https://spdx.org/licenses/PostgreSQL.html": "PostgreSQL License",
                                "https://spdx.org/licenses/Python-2.0.html": "Python License 2.0",
                                "https://spdx.org/licenses/QPL-1.0.html": "Q Public License 1.0",
                                "https://spdx.org/licenses/RPL-1.1.html": "Reciprocal Public License 1.1",
                                "https://spdx.org/licenses/RPL-1.5.html": "Reciprocal Public License 1.5",
                                "https://spdx.org/licenses/RPSL-1.0.html": "RealNetworks Public Source License v1.0",
                                "https://spdx.org/licenses/RSCPL.html": "Ricoh Source Code Public License",
                                "https://spdx.org/licenses/Ruby.html": "Ruby License",
                                "https://spdx.org/licenses/SGI-B-2.0.html": "SGI Free Software License B v2.0",
                                "https://spdx.org/licenses/SimPL-2.0.html": "Simple Public License 2.0",
                                "https://spdx.org/licenses/SISSL.html": "Sun Industry Standards Source License v1.1",
                                "https://spdx.org/licenses/Sleepycat.html": "Sleepycat License",
                                "https://spdx.org/licenses/SMLNJ.html": "Standard ML of New Jersey License",
                                "https://spdx.org/licenses/SPL-1.0.html": "Sun Public License v1.0",
                                "https://spdx.org/licenses/StandardML-NJ.html": "Standard ML of New Jersey License",
                                "https://spdx.org/licenses/UCL-1.0.html": "Upstream Compatibility License v1.0",
                                "https://spdx.org/licenses/Unicode-DFS-2016.html": "Unicode License Agreement - Data Files and Software (2016)",
                                "https://spdx.org/licenses/Unlicense.html": "The Unlicense",
                                "https://spdx.org/licenses/UPL-1.0.html": "Universal Permissive License v1.0",
                                "https://spdx.org/licenses/Vim.html": "Vim License",
                                "https://spdx.org/licenses/VSL-1.0.html": "Vovida Software License v1.0",
                                "https://spdx.org/licenses/W3C.html": "W3C Software Notice and License (2002-12-31)",
                                "https://spdx.org/licenses/Watcom-1.0.html": "Sybase Open Watcom Public License 1.0",
                                "https://spdx.org/licenses/WTFPL.html": "Do What The F*ck You Want To Public License",
                                "https://spdx.org/licenses/wxWindows.html": "wxWindows Library License",
                                "https://spdx.org/licenses/X11.html": "X11 License",
                                "https://spdx.org/licenses/XFree86-1.1.html": "XFree86 License 1.1",
                                "https://spdx.org/licenses/xinetd.html": "xinetd License",
                                "https://spdx.org/licenses/Xnet.html": "X.Net License",
                                "https://spdx.org/licenses/YPL-1.1.html": "Yahoo! Public License v1.1",
                                "https://spdx.org/licenses/Zend-2.0.html": "Zend License v2.0",
                                "https://spdx.org/licenses/Zimbra-1.3.html": "Zimbra Public License v1.3",
                                "https://spdx.org/licenses/Zlib.html": "zlib License",
                                "https://spdx.org/licenses/ZPL-2.0.html": "Zope Public License 2.0",
                                "https://spdx.org/licenses/ZPL-2.1.html": "Zope Public License 2.1"
                            }
                        }
                    ]
                },
                {
                    "title": "Recommended_Attributes",
                    "type": "tab",
                    "items": [
                        {
                            "title": "Version",
                            "key": "version",
                            "placeholder": "1.0.0"
                        },
                        {
                            "title": "Modification Date",
                            "key": "dateModified",
                            "placeholder": "yyyy-MM-ddThh:mm:ssZ",
                            "slots": "yMdhms",
                            "accept": "\\d",
                        },
                        {
                            "title": "Checksum",
                            "key": "checksum",
                            "placeholder":"0CBC6611F5540BD0809A388DC95A615B",
                        },
                        {
                            "type": "array",
                            "title": "Topics",
                            "items": {
                                "type": "section",
                                "items": [
                                    {
                                        "title": "Topic",
                                        "key": "topic[]",
                                        "type": "text",
                                        "placeholder":"http://vocabularies.unesco.org/thesaurus/concept7387"
                                    }
                                ]
                            }
                        },
                        {
                            "type": "array",
                            "title": "Contact",
                            "items": {
                                "type": "section",
                                "items": [
                                    {
                                        "title": "Contact",
                                        "key": "contact[]",
                                        "type": "text",
                                        "placeholder":"https://ror.org/04t3en479"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "title": "Enhanced_Attributes",
                    "type": "tab",
                    "items": [
                        {
                            "title": "Embargo Date",
                            "key": "underEmbargoUntil",
                            "placeholder": "yyyy-MM-ddThh:mm:ssZ",
                            "slots": "yMdhms",
                            "accept": "\\d",
                        },
                        {
                            "type": "array",
                            "title": "Previews",
                            "items": {
                                "type": "section",
                                "items": [
                                    {
                                        "title": "Preview",
                                        "key": "locationPreview[]",
                                        "type": "text",
                                        "placeholder":"https://hostname:port/data/preview.tiff"
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
