def combined_time(hours, minutes, seconds):
    if seconds > 59:
        minutes += seconds // 60
        seconds = seconds % 60

    if minutes > 59:
        hours += minutes // 60
        minutes = minutes % 60

    total_time = hours + (minutes / 60) + (seconds / 3600)

    return total_time
