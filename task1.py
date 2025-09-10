import re
from collections import Counter

def top_k_words(text: str, k: int):
    if k <= 0:
        return []
    # Extract words and convert to lowercase
    words = re.findall(r'\b[a-zA-Z]+\b', text.lower())
    if not words:
        return []
    # Count word frequencies
    freq = Counter(words)
    # Sort by frequency (descending), then alphabetically
    sorted_words = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
    # Return the top k words
    return [word for word, _ in sorted_words[:k]]

# Example usage
print(top_k_words("ZAID", 4))

