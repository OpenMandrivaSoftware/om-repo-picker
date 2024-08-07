<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="nl">
<context>
    <name>MainDialog</name>
    <message>
        <location filename="../src/MainDialog.cpp" line="19"/>
        <source>OpenMandriva Software Repository Picker</source>
        <translation>OpenMandriva-softwarebronkeuze</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="29"/>
        <source>Below, you can select from which repositories you want to install and update packages (extra applications, games, etc.).</source>
        <translation>Hieronder kun je aangeven uit welke pakketbronnen je pakketten wilt installeren en bijwerken (aanvullende programma&apos;s, spellen, etc.).</translation>
    </message>
    <message>
        <source>32-bit repositories contain the same packages built for 32 bit processors. Those repositories are usually useful only for compatibility with prebuilt packages for older systems - such as binary-only games and applications built for 32-bit processors and running 32-bit Windows applications in Wine.</source>
        <translation type="vanished">32-bits pakketbronnen bevatten dezelfde pakketten, maar dan speciaal voor 32-bitcpu&apos;s. Deze zijn alleen benodigd voor compatibiliteit i.c.m. pakket voor oudere systemen, zoals spellen en programma&apos;s die alleen voor 32-bit zijn gemaakt of 32-bit Windows-programma&apos;s in Wine.</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="47"/>
        <source>&amp;OK</source>
        <translation>&amp;Oké</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="49"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="176"/>
        <source>Update channel changed</source>
        <translation>Het updatekanaal is gewijzigd</translation>
    </message>
    <message>
        <location filename="../src/MainDialog.cpp" line="176"/>
        <source>The update channel has been changed. You probably want to refresh all packages in the graphical package manager or by running &quot;dnf --refresh distro-sync&quot; in a command line.</source>
        <translation>Het updatekanaal is gewijzigd. Ververs alle pakketten middels de grafische pakketbeheerder of door ‘dnf --refresh distro-sync’ uit te voeren in een terminalvenster.</translation>
    </message>
</context>
<context>
    <name>OMRepos</name>
    <message>
        <location filename="../src/OMRepos.cpp" line="9"/>
        <source>OpenMandriva repositories</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RepoWidget</name>
    <message>
        <source>&amp;Enable</source>
        <translation type="vanished">Inschak&amp;elen</translation>
    </message>
    <message>
        <source>Ena&amp;ble 32-bit</source>
        <translation type="vanished">32-&amp;bit inschakelen</translation>
    </message>
</context>
<context>
    <name>ThirdPartyRepoWidget</name>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="5"/>
        <source>Third party repositories</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ThirdPartyRepoWidget.cpp" line="6"/>
        <source>Third Party repositories containing (usually non-free) software where neither the software nor the packages are maintained by the OpenMandriva team. These packages are not under our control and you will receive updates before they have been tested on OpenMandriva. Use at your own risk.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UpdateChannelPicker</name>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="8"/>
        <source>U&amp;pdate channel</source>
        <translation>U&amp;pdatekanaal</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="10"/>
        <source>&amp;Update channel:</source>
        <translation>&amp;Updatekanaal:</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="20"/>
        <source>Enable &amp;testing repositories (Updates ahead of time for QA)</source>
        <translation>&amp;Testbronnen inschakelen (vooraf vrijgegeven updates)</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>Really try to downgrade?</source>
        <translation>Afwaarderen bevestigen</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="31"/>
        <source>You&apos;re trying to switch to an update channel older than what you&apos;re currently using. This will result in downgrading packages, which may or may not work. Going back to older versions is unsupported (older versions of applications can&apos;t know about potential changes in newer versions...) and may well break your system. Are you sure you want to do this?</source>
        <translation>Je staat op het punt om over te schakelen naar een kanaal dat ouder is dan je huidige. Hierdoor worden pakketten afgewaardeerd, welke nadien mogelijk niet meer zullen werken. Afwaarderen wordt niet ondersteund (oudere versies van programma&apos;s weten niet af van wijzigingen in nieuwere) en gaat je systeem kapotmaken. Weet je zeker dat je wilt doorgaan?</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>Really upgrade?</source>
        <translation>Opwaarderen bevestigen</translation>
    </message>
    <message>
        <location filename="../src/UpdateChannelPicker.cpp" line="36"/>
        <source>You&apos;re about to switch to a faster update channel. Please note that this is a permanent switch, downgrading your system by going back to a slower update channel is not supported and may break your system. Are you sure you want to do this?</source>
        <translation>Je staat op het punt om over te schakelen naar een sneller updatekanaal. Deze wijziging is permanent, aangezien afwaarderen niet wordt ondersteund en je systeem kapot zal maken. Weet je zeker dat je wilt doorgaan?</translation>
    </message>
</context>
<context>
    <name>repos</name>
    <message>
        <location filename="../src/Tools.cpp" line="20"/>
        <source>Main</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="20"/>
        <source>The Main repository contains the main packages that make up OpenMandriva Lx. It should always be enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Extra</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="21"/>
        <source>Extra contains packages that are free, but not officially supported by OpenMandriva. While we will try to fix them if something breaks, this is a low priority. Enable Extra if you need them and don&apos;t mind an occasional crash.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="22"/>
        <source>Restricted contains packages that are free, but encumbered by patents that may make them illegal to use or distribute in some countries. You are responsible for complying with your local laws.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-Free</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="23"/>
        <source>Non-free contains packages that are not free (as in Open Source). Even if we want to, we cannot fix problems in them. We can not read the code, or verify what the packages actually do. While there are no known side effects, they may contain spyware or malware. They may erase your harddisk. You&apos;re on your own.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>thirdPartyRepos</name>
    <message>
        <location filename="../src/Tools.cpp" line="29"/>
        <source>Brave Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="29"/>
        <source>The Brave web browser.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>Google Chrome</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="30"/>
        <source>The Google Chrome browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>Microsoft Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="31"/>
        <source>The Microsoft Edge browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>Opera Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="32"/>
        <source>The Opera browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>Yandex Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="33"/>
        <source>The Yandex browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>Vivaldi Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="34"/>
        <source>The Vivaldi browser. We strongly recommend using a free browser, such as Falkon, Chromium, Firefox or Otter instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="35"/>
        <source>Skype</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="35"/>
        <source>The Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="36"/>
        <source>Skype Unstable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="36"/>
        <source>Beta versions of the Skype instant messenger. We strongly recommend using a free messenger, such as Telegram, instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>Microsoft Teams</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="37"/>
        <source>The Microsoft Teams business communication platform. We strongly recommend using a free platform, such as Mattermost, instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="40"/>
        <source>Visual Studio Code</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="40"/>
        <source>The Visual Studio Code IDE. We strongly recommend using Qt Creator, KDevelop or other alternative IDEs.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>updateChannels</name>
    <message>
        <location filename="../src/Tools.cpp" line="12"/>
        <source>Release</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="12"/>
        <source>Always stay on this release</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Rock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="13"/>
        <source>Always stay on current stable release</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="14"/>
        <source>Rolling release - current, working versions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Cooker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/Tools.cpp" line="15"/>
        <source>Development branch - most current, may break at any time</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
