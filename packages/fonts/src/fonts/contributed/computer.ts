import { FontFile } from '../../FontFile';

const computer = new FontFile(
    'computer',
    'ZmxmMmEkIDcgNiAyMCAwIDIKY29tcHV0ZXIuZmxmIGJ5IE1pa2UgUm9zdWxlayA8bWpyQG5ldGlucy5uZXQ+LCA3LzEyLzk1LiBDaGVjayBvdXQgbXkKaG9tZXBhZ2UgYXQ6IGh0dHA6Ly93d3cubmV0aW5zLm5ldC9zaG93Y2FzZS9taWtld3JsZC8KJCQjCiQkIwokJCMKJCQjCiQkIwokJCMKJCQjIwo4JCAjCjg4JCMKODgkIwo4OCQjCiQgICMKODgkIwogICQjIwo4IDgkIwoiICIkIwokICAgIwokICAgIwokICAgIwokICAgIwokICAgIyMKICAgICBkUCBkUCQgIwogIDg4ODg4ODg4OCQjCiAgIGRQIGRQJCAgICMKODg4ODg4ODg4JCAgIwogZFAgZFAkICAgICAjCiQgICAgICAgICAgICMKJCAgICAgICAgICAgIyMKZWU4ZWUkIwo4ICAgOCQjCjhlZWVlJCMKICAgODgkIwplICA4OCQjCjhlZTg4JCMKICA4JCAgIyMKOCI4ICBkUCQjCjhlOCBkUCQgIwogICBkUCQgICMKICBkUCQgICAjCiBkUCA4IjgkIwpkUCAgOGU4JCMKJCAgICAgICAjIwogODg4ODg4JCMKIDggICAsJCAjCjg4ZWVlOGUkIwo4OCAgIDgkICMKODggICA4JCAjCjg4ZWVlOCQgIwokICAgICAgICMjCjg4JCMKIDgkIwokICAjCiQgICMKJCAgIwokICAjCiQgICMjCjgiJCMKOCQgIwo4JCAjCjgkICMKOCQgIwo4ZSQjCiQgICMjCiI4JCMKIDgkIwogOCQjCiA4JCMKIDgkIwplOCQjCiQgICMjClx8LyQjCi98XCQjCiQgICAjCiQgICAjCiQgICAjCiQgICAjCiQgICAjIwokICAgICAjCiQgICAgICMKICA4JCAgIwplZThlZSQjCiAgOCQgICMKJCAgICAgIwokICAgICAjIwokICAjCiQgICMKJCAgIwokICAjCiQgICMKODgkIwogOCQjIwokICAgICMKJCAgICAjCiQgICAgIwplZWVlJCMKJCAgICAjCiQgICAgIwokICAgICMjCiQgICMKJCAgIwokICAjCiQgICMKJCAgIwo4OCQjCiQgICMjCiAgICAgLyQjCiAgICAvJCAjCiAgIC8kICAjCiAgLyQgICAjCiAvJCAgICAjCi8kICAgICAjCiQgICAgICAjIwplZWVlZWUkIwo4ICAgIDgkIwo4ICAgIDgkIwo4ICAgIDgkIwo4ICAgIDgkIwo4ZWVlZTgkIwokICAgICAgIyMKODgkICAjCiA4JCAgIwogOCQgICMKIDgkICAjCjg4ODgkIwo4ODg4JCMKJCAgICAjIwplZWVlJCMKICAgOCQjCiAgIDgkIwplZWU4JCMKOCQgICAjCjhlZWUkIwokICAgICMjCmVlZWUkICMKICAgOCQgIwogICA4JCAjCmVlZTgkICMKICAgODgkIwplZWU4OCQjCiQgICAgICMjCjg4JCAgICAjCjg4JCAgICAjCjg4ICA4OCQjCjg4ZWU4OCQjCiAgICA4OCQjCiAgICA4OCQjCiQgICAgICAjIwplZWVlZSQjCjgkICAgICMKOGVlZWUkIwogICAgOCQjCiAgICA4JCMKZWVlZTgkIwokICAgICAjIwplZWVlJCAjCjggIDgkICMKOCQgICAgIwo4ZWVlZSQjCjggICA4JCMKOGVlZTgkIwokICAgICAjIwplZWVlZSQjCjggICA4JCMKICAgZSckIwogIGUnJCAjCiAgOCQgICMKICA4JCAgIwokICAgICAjIwogZWVlZWUkICMKIDggICA4JCAjCiA4ZWVlOCQgIwo4OCAgIDg4JCMKODggICA4OCQjCjg4ZWVlODgkIwokICAgICAgICMjCmVlZWVlJCMKOCAgIDgkIwo4ZWVlOCQjCiAgIDg4JCMKICAgODgkIwogICA4OCQjCiQgICAgICMjCiQgICMKJCAgIwokICAjCjg4JCMKJCAgIwo4OCQjCiQgICMjCiQgICMKJCAgIwokICAjCjg4JCMKJCAgIwo4OCQjCiA4JCMjCiAgICBlOCIkIwogIGU4IiQgICMKZTgiJCAgICAjCiI4ZSQgICAgIwogICI4ZSQgICMKICAgICI4ZSQjCiQgICAgICAgIyMKJCAgICAgIwokICAgICAjCiQgICAgICMKZWVlZWUkIwplZWVlZSQjCiQgICAgICMKJCAgICAgIyMKIjhlJCAgICAjCiAgIjhlJCAgIwogICAgIjhlJCMKICAgIGU4IiQjCiAgZTgiJCAgIwplOCIkICAgICMKJCAgICAgICAjIwo4IiIiIjgkIwogICAgIDgkIwplZWVlZTgkIwo4OCQgICAgIwoiIiQgICAgIwo4OCQgICAgIwokICAgICAgIyMKICAgIF9fJCAgICAjCiAgLicgIGAuJCAgIwogLyBlZWVlIFwkICMKfCAgOGVlOCAgfCQjCiBcIDg4IDggLyQgIwogIGAuX18uJyQgICMKJCAgICAgICAgICAjIwo4IiIiIjgkIwo4ICAgIDgkIwo4ZWVlZTgkIwo4OCAgIDgkIwo4OCAgIDgkIwo4OCAgIDgkIwokICAgICAgIyMKOCIiIiI4JCAgIwo4ICAgIDgkICAjCjhlZWVlOGVlJCMKODggICAgIDgkIwo4OCAgICAgOCQjCjg4ZWVlZWU4JCMKJCAgICAgICAgIyMKOCIiIiI4JCMKOCAgICAiJCMKOGUkICAgICMKODgkICAgICMKODggICBlJCMKODhlZWU4JCMKJCAgICAgICMjCjgiIiIiOCQjCjggICAgOCQjCjhlICAgOCQjCjg4ICAgOCQjCjg4ICAgOCQjCjg4ZWVlOCQjCiQgICAgICAjIwo4IiIiIiQjCjgkICAgICMKOGVlZWUkIwo4OCQgICAjCjg4JCAgICMKODhlZWUkIwokICAgICAjIwo4IiIiIiQjCjgkICAgICMKOGVlZWUkIwo4OCQgICAjCjg4JCAgICMKODgkICAgIwokICAgICAjIwo4IiIiIjgkIwo4ICAgICIkIwo4ZSQgICAgIwo4OCAgZWUkIwo4OCAgIDgkIwo4OGVlZTgkIwokICAgICAgIyMKOCAgIDgkIwo4ICAgOCQjCjhlZWU4JCMKODggIDgkIwo4OCAgOCQjCjg4ICA4JCMKJCAgICAgIyMKOCQgIwo4JCAjCjhlJCMKODgkIwo4OCQjCjg4JCMKJCAgIyMKICAgIDgkICMKICAgIDgkICMKICAgIDhlJCMKICAgIDg4JCMKZSAgIDg4JCMKOGVlZTg4JCMKJCAgICAgICMjCjggICA4JCAjCjggICA4JCAjCjhlZWU4ZSQjCjg4ICAgOCQjCjg4ICAgOCQjCjg4ICAgOCQjCiQgICAgICAjIwo4JCAgICAjCjgkICAgICMKOGUkICAgIwo4OCQgICAjCjg4JCAgICMKODhlZWUkIwokICAgICAjIwo4IiI4IiI4JCMKOCAgOCAgOCQjCjhlIDggIDgkIwo4OCA4ICA4JCMKODggOCAgOCQjCjg4IDggIDgkIwokICAgICAgICMjCjgiIiI4JCMKOCAgIDgkIwo4ZSAgOCQjCjg4ICA4JCMKODggIDgkIwo4OCAgOCQjCiQgICAgICMjCjgiIiI4OCQjCjggICAgOCQjCjggICAgOCQjCjggICAgOCQjCjggICAgOCQjCjhlZWVlOCQjCiQgICAgICAjIwo4IiIiIjgkIwo4ICAgIDgkIwo4ZWVlZTgkIwo4OCQgICAgIwo4OCQgICAgIwo4OCQgICAgIwokICAgICAgIyMKOCIiIiI4JCMKOCAgICA4JCMKOCAgICA4JCMKOCAgICA4JCMKOCBfX184JCMKOGU4ODg4JCMKJCAgICAgICMjCjgiIiI4JCAjCjggICA4JCAjCjhlZWU4ZSQjCjg4ICAgOCQjCjg4ICAgOCQjCjg4ICAgOCQjCiQgICAgICAjIwo4IiIiIjgkIwo4ICAgICAkIwo4ZWVlZWUkIwogICAgODgkIwplICAgODgkIwo4ZWVlODgkIwokICAgICAgIyMKIiI4IiIkIwogIDgkICAjCiAgOGUkICMKICA4OCQgIwogIDg4JCAjCiAgODgkICMKJCAgICAgIyMKOCAgIDgkIwo4ICAgOCQjCjhlICA4JCMKODggIDgkIwo4OCAgOCQjCjg4ZWU4JCMKJCAgICAgIyMKODggICA4JCMKODggICA4JCMKODggIGU4JCMKIjggIDgkICMKIDggIDgkICMKIDhlZTgkICMKJCAgICAgICMjCjggICA4ICA4JCMKOCAgIDggIDgkIwo4ZSAgOCAgOCQjCjg4ICA4ICA4JCMKODggIDggIDgkIwo4OGVlOGVlOCQjCiQgICAgICAgICMjCjggICAgOCQjCjggICAgOCQjCmVlZWVlZSQjCjg4ICAgOCQjCjg4ICAgOCQjCjg4ICAgOCQjCiQgICAgICAjIwo4ICAgIDgkIwo4ICAgIDgkIwo4ZWVlZTgkIwogIDg4JCAgIwogIDg4JCAgIwogIDg4JCAgIwokICAgICAgIyMKOCIiIiI4JCMKICAgICA4JCMKZWVlZWU4JCMKODgkICAgICMKODgkICAgICMKODhlZWU4JCMKJCAgICAgICMjCjgiJCMKOCAkIwo4ICQjCjggJCMKOCAkIwo4ZSQjCiQgICMjClwkICAgICAjCiBcJCAgICAjCiAgXCQgICAjCiAgIFwkICAjCiAgICBcJCAjCiAgICAgXCQjCiQgICAgICAjIwoiOCQjCiA4JCMKIDgkIwogOCQjCiA4JCMKZTgkIwokICAjIwovXCQjCiQgICMKJCAgIwokICAjCiQgICMKJCAgIwokICAjIwokICAgICAjCiQgICAgICMKJCAgICAgIwokICAgICAjCiQgICAgICMKJCAgICAgIwplZWVlZSQjIwpcJCAjCiBcJCMKJCAgIwokICAjCiQgICMKJCAgIwokICAjIwokICAgICAjCmVlZWVlJCMKOCAgIDgkIwo4ZWVlOCQjCjg4ICA4JCMKODggIDgkIwokICAgICAjIwokICAgICAgIwplZWVlZSQgIwo4ICAgOCQgIwo4ZWVlOGUkIwo4OCAgIDgkIwo4OGVlZTgkIwokICAgICAgIyMKJCAgICAjCmVlZWUkIwo4ICA4JCMKOGUkICAjCjg4JCAgIwo4OGU4JCMKJCAgICAjIwokICAgICAjCmVlZWVlJCMKOCAgIDgkIwo4ZSAgOCQjCjg4ICA4JCMKODhlZTgkIwokICAgICAjIwokICAgICMKZWVlZSQjCjgkICAgIwo4ZWVlJCMKODgkICAjCjg4ZWUkIwokICAgICMjCiQgICAgIwplZWVlJCMKOCQgICAjCjhlZWUkIwo4OCQgICMKODgkICAjCiQgICAgIyMKJCAgICAgIwplZWVlZSQjCjggICA4JCMKOGUkICAgIwo4OCAiOCQjCjg4ZWU4JCMKJCAgICAgIyMKJCAgICAgIwplICAgZSQjCjggICA4JCMKOGVlZTgkIwo4OCAgOCQjCjg4ICA4JCMKJCAgICAgIyMKJCAgIwplJCAjCjgkICMKOGUkIwo4OCQjCjg4JCMKJCAgIyMKJCAgICAgIwogICBlJCAjCiAgIDgkICMKICAgOGUkIwplICA4OCQjCjhlZTg4JCMKJCAgICAgIyMKJCAgICAgICMKZSAgIGUkICMKOCAgIDgkICMKOGVlZThlJCMKODggICA4JCMKODggICA4JCMKJCAgICAgICMjCiQgICAgICMKZSQgICAgIwo4JCAgICAjCjhlJCAgICMKODgkICAgIwo4OGVlZSQjCiQgICAgICMjCiQgICAgICAgIwplZWVlZWVlJCMKOCAgOCAgOCQjCjhlIDggIDgkIwo4OCA4ICA4JCMKODggOCAgOCQjCiQgICAgICAgIyMKJCAgICAgIwplZWVlZSQjCjggICA4JCMKOGUgIDgkIwo4OCAgOCQjCjg4ICA4JCMKJCAgICAgIyMKJCAgICAgIwplZWVlZSQjCjggIDg4JCMKOCAgIDgkIwo4ICAgOCQjCjhlZWU4JCMKJCAgICAgIyMKJCAgICAgIwplZWVlZSQjCjggICA4JCMKOGVlZTgkIwo4OCQgICAjCjg4JCAgICMKJCAgICAgIyMKJCAgICAgIwplZWVlZSQjCjggICA4JCMKOCAgIDgkIwo4IF9fOCQjCjhlODg4JCMKJCAgICAgIyMKJCAgICAgICMKZWVlZWUkICMKOCAgIDgkICMKOGVlZThlJCMKODggICA4JCMKODggICA4JCMKJCAgICAgICMjCiQgICAgICMKZWVlZWUkIwo4ICAgIiQjCjhlZWVlJCMKICAgODgkIwo4ZWU4OCQjCiQgICAgICMjCiQgICAgICMKZWVlZWUkIwogIDgkICAjCiAgOGUkICMKICA4OCQgIwogIDg4JCAjCiQgICAgICMjCiQgICAgICMKZSAgIGUkIwo4ICAgOCQjCjhlICA4JCMKODggIDgkIwo4OGVlOCQjCiQgICAgICMjCiQgICAgICAjCmVlICAgZSQjCjg4ICAgOCQjCjg4ICBlOCQjCiA4ICA4JCAjCiA4ZWU4JCAjCiQgICAgICAjIwokICAgICAgICAjCmUgICBlICBlJCMKOCAgIDggIDgkIwo4ZSAgOCAgOCQjCjg4ICA4ICA4JCMKODhlZThlZTgkIwokICAgICAgICAjIwokICAgICAgIwplICAgIGUkIwo4ICAgIDgkIwplZWVlZWUkIwo4OCAgIDgkIwo4OCAgIDgkIwokICAgICAgIyMKJCAgICAgICMKZSAgICBlJCMKOCAgICA4JCMKOGVlZWU4JCMKICA4OCQgICMKICA4OCQgICMKJCAgICAgICMjCiQgICAgICMKZWVlZWUkIwoiICAgOCQjCmVlZWU4JCMKODgkICAgIwo4OGVlOCQjCiQgICAgICMjCiAgLyIkIwogfCQgICMKIHwkICAjCjwkICAgIwogfCQgICMKIHwkICAjCiAgXF8kIyMKOCQjCjgkIwo4JCMKOCQjCjgkIwo4JCMKJCAjIwoiXCQgICMKICB8JCAjCiAgfCQgIwogICA+JCMKICB8JCAjCiAgfCQgIwpfLyQgICMjCi9cLyQjCiQgICAjCiQgICAjCiQgICAjCiQgICAjCiQgICAjCiQgICAjIwoiIiAiIiQjCmVlZWVlJCMKOCAgIDgkIwo4ZWVlOCQjCjg4ICA4JCMKODggIDgkIwokICAgICAjIwoiIiAiIiQjCmVlZWVlJCMKOCAgODgkIwo4ICAgOCQjCjggICA4JCMKOGVlZTgkIwokICAgICAjIwoiIiAiIiQjCmUgICBlJCMKOCAgIDgkIwo4ZSAgOCQjCjg4ICA4JCMKODhlZTgkIwokICAgICAjIwoiIiAiIiQjCmVlZWVlJCMKOCAgIDgkIwo4ZWVlOCQjCjg4ICA4JCMKODggIDgkIwokICAgICAjIwoiIiAiIiQjCmVlZWVlJCMKOCAgODgkIwo4ICAgOCQjCjggICA4JCMKOGVlZTgkIwokICAgICAjIwoiIiAiIiQjCmUgICBlJCMKOCAgIDgkIwo4ZSAgOCQjCjg4ICA4JCMKODhlZTgkIwokICAgICAjIwokIwokIwokIwokIwokIwokIwokIyMK'
);

export default computer;