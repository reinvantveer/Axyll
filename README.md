# Axyll
A simple Tizen Samsung wearable app to keep track of your daily flow. Basically a tinkering project on tizen and Samsung wearables.

# A tip
It's perfectly fine to do your tizen web apps using NPM and WebPack. Just make sure you exclude the node_modules dir using
```xml
	<filteredResources>
		<filter>
			<id>1556972807556</id>
			<name></name>
			<type>30</type>
			<matcher>
				<id>org.eclipse.ui.ide.multiFilter</id>
				<arguments>1.0-name-matches-false-false-node_modules</arguments>
			</matcher>
		</filter>
	</filteredResources>
```
section in your tizen studio .project unless you want the eclipse IDE all frozen over due to 1000+ files in node_modules.

or if you're building using the tizen CLI (which I still intend to do, but haven't figured out yet)
`tizen --exclude node_modules/* ...`
