import re
from collections import Counter

def top_k_words(text: str, k: int):
    if k <= 0:
        return []

    words = re.findall(r'\b[a-zA-Z]+\b', text.lower())
    
    if not words:
        return []

    freq = Counter(words)

    sorted_words = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
    

    return [word for word, _ in sorted_words[:k]]
