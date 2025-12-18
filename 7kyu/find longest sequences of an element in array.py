def longest_sequence(arr, elem):
    max_len = 0
    current_len = 0

    for value in arr:
        if value == elem:
            current_len += 1
            max_len = max(max_len, current_len)
        else:
            current_len = 0

    return max_len